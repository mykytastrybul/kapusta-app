import s from '../../components/TableIncomeOutcome/TableIncomeOutcome.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import {
  getExpenseStats,
  getIncomeStats,
} from '../../redux/transactions/transactionsOperations';
import authSelectors from '../../redux/auth/authSelectors';
import NumberFormat from 'react-number-format';
import { makeUkrCatsNames } from '../../utils/function/translateBackEndResp';

export default function TableIncomeOutcome() {
  const dispatch = useDispatch();
  const [statsToDraw, setStatsToDraw] = useState([]);
  const expensesStats = useSelector(state => state.transactions.data.expenses);
  const incomesStats = useSelector(state => state.transactions.data.incomes);
  const location = useLocation();
  const token = useSelector(authSelectors.getToken);
  const [numColor, setNumColor] = useState('#e53935');

  useEffect(() => {
    dispatch(getExpenseStats());
    dispatch(getIncomeStats());
  }, [token, dispatch]);

  useEffect(() => {
    switch (location.pathname) {
      case '/expenses':
        setStatsToDraw(expensesStats);
        setNumColor('#e53935');
        break;
      case '/incomes':
        setStatsToDraw(incomesStats);
        setNumColor('#407946');
        break;
      default:
        break;
    }
    // console.log('statsToDraw', statsToDraw);
  }, [expensesStats, incomesStats, statsToDraw, location.pathname]);

  return (
    <div className={s.wrap}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={`${s.title} ${s.line}`}>
            <th className={s.date}>Дата</th>
            <th className={s.description}>Опис</th>
            <th className={s.category}>Категорія</th>
            <th className={s.summa}>Сума</th>
            <th className={s.delete}></th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {statsToDraw.length > 0 &&
            statsToDraw.map(el => (
              <tr key={el._id} className={s.line}>
                <td className={s.date}>{el.date}</td>
                <td className={`${s['cell-desc']} ${s.description}`}>
                  <span>{el.description}</span>
                </td>
                <td className={s.category}>{makeUkrCatsNames(el.category)}</td>
                <td style={{ color: numColor }} className={s.summa}>
                  <NumberFormat
                    value={el.amount}
                    displayType={'text'}
                    thousandSeparator={' '}
                    suffix={' грн.'}
                    prefix={numColor === '#e53935' && '- '}
                    type="text"
                    decimalSeparator="."
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td className={s.delete}>
                  <DeleteButton id={el._id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
