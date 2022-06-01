import { useSelector } from 'react-redux';
import ReportTransactionsItem from '../ReportItem/ReportItem';
import ControlsByTransType from '../ControlsByTransType/ControlsByTransType';
import s from './ReportTransactionsList.module.scss';

import {
  getExpensesData,
  getIncomesData,
} from '../../../redux/reports/reportsSelectors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setIcon } from '../../../utils/function/setIcon';

const ReportTransactionsList = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('expenses');
  const [transactionsList, setTransactionsList] = useState([]);
  const expensesData = useSelector(getExpensesData);
  const incomesData = useSelector(getIncomesData);

  const toggleType = () => {
    if (type === 'expenses') setType('incomes');
    if (type === 'incomes') setType('expenses');
  };

  const setCategory = () => {
    if (transactionsList.length !== 0) {
      return setIcon[transactionsList[0].name].category;
    }
  };

  useEffect(() => {
    if (Object.entries(expensesData).length > 0 && type === 'expenses') {
      setTransactionsList(
        Object.entries(expensesData).map(el => {
          let icon = setIcon[el[0]].icon;
          return {
            key: el[0],
            name: el[0],
            sum: el[1].total,
            icon,
          };
        })
      );
    } else if (
      Object.entries(expensesData).length === 0 &&
      type === 'expenses'
    ) {
      setTransactionsList([]);
    }

    if (Object.entries(incomesData).length > 0 && type === 'incomes') {
      setTransactionsList(
        Object.entries(incomesData).map(el => {
          let icon = '';
          switch (el[0]) {
            case 'З/П':
              icon = 'salary';
              break;
            case 'Доп. доход':
              icon = 'extra-income';
              break;
            default:
              icon = '';
          }

          return {
            key: el[0],
            name: el[0],
            sum: el[1].total,
            icon,
          };
        })
      );
    } else if (Object.entries(incomesData).length === 0 && type === 'incomes') {
      setTransactionsList([]);
    }
  }, [expensesData, incomesData, type]);

  useEffect(() => {
    if (transactionsList.length > 0) {
      navigate({
        search: `type=${type === 'incomes' ? 'incomes' : 'expenses'}&category=${
          setCategory() || ''
        }`,
      });
    }
    //eslint-disable-next-line
  }, [type, transactionsList]);

  return (
    <div className={s.wrapper}>
      <ControlsByTransType type={type} toggleType={toggleType} />

      {transactionsList.length > 0 ? (
        <ul className={s.list}>
          {transactionsList.map(({ icon, sum, name, key }) => (
            <ReportTransactionsItem
              icon={icon}
              sum={sum}
              name={name}
              key={key}
              type={type}
            />
          ))}
        </ul>
      ) : (
        <p className={s.text}>За даний період транзакцій нема</p>
      )}
    </div>
  );
};

export default ReportTransactionsList;
