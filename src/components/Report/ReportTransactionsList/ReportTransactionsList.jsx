import { useSelector } from 'react-redux';
import ReportTransactionsItem from '../ReportItem/ReportItem';
import ControlsByTransType from '../ControlsByTransType/ControlsByTransType';
import s from './ReportTransactionsList.module.scss';
import {
  getExpensesData,
  getIncomesData,
} from '../../../redux/periodData/periodDataSelectors';
import { useEffect, useState } from 'react';

const ReportTransactionsList = () => {
  const [type, setType] = useState('PACХОДЫ');
  const [transactionsList, setTransactionsList] = useState([
    {
      sum: '',
      icon: '',
      name: '',
      key: '',
    },
  ]);
  const expensesData = useSelector(getExpensesData);
  const incomesData = useSelector(getIncomesData);

  const typeToggler = () => {
    setType(prev => {
      return prev === 'PACХОДЫ' ? 'ДОХОДЫ' : 'PACХОДЫ';
    });
  };

  useEffect(() => {
    if (Object.entries(expensesData).length > 0 && type === 'PACХОДЫ') {
      setTransactionsList(
        Object.entries(expensesData).map(el => {
          let icon = '';
          switch (el[0]) {
            case 'Продукты':
              icon = 'products';
              break;
            case 'Алкоголь':
              icon = 'alcohol';
              break;
            case 'Развлечения':
              icon = 'fun';
              break;
            case 'Здоровье':
              icon = 'health';
              break;
            case 'Транспорт':
              icon = 'transport';
              break;
            case 'Всё для дома':
              icon = 'home-depot';
              break;
            case 'Техника':
              icon = 'equipment';
              break;
            case 'Коммуналка и связь':
              icon = 'utilities';
              break;
            case 'Спорт и хобби':
              icon = 'hobby';
              break;
            case 'Образование':
              icon = 'education';
              break;
            case 'Прочее':
              icon = 'stuff';
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
    } else if (
      Object.entries(expensesData).length === 0 &&
      type === 'PACХОДЫ'
    ) {
      setTransactionsList({
        sum: '',
        icon: '',
        name: '',
        key: '',
      });
    }

    if (Object.entries(incomesData).length > 0 && type === 'ДОХОДЫ') {
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
    } else if (Object.entries(incomesData).length === 0 && type === 'ДОХОДЫ') {
      setTransactionsList({
        sum: '',
        icon: '',
        name: '',
        key: '',
      });
    }
  }, [expensesData, incomesData, type]);

  return (
    <div className={s.wrapper}>
      <ControlsByTransType type={type} typeToggler={typeToggler} />

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
        <p className={s.text}>За данный период транзакций нет</p>
      )}
    </div>
  );
};

export default ReportTransactionsList;
