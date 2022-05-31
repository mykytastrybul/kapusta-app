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

export default function TableIncomeOutcome() {
  const dispatch = useDispatch();
  const [statsToDraw, setStatsToDraw] = useState([]);
  const expensesStats = useSelector(state => state.transactions.data.expenses);
  const incomesStats = useSelector(state => state.transactions.data.incomes);
  const location = useLocation();
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    dispatch(getExpenseStats());
    dispatch(getIncomeStats());
  }, [token, dispatch]);

  useEffect(() => {
    switch (location.pathname) {
      case '/expenses':
        setStatsToDraw(expensesStats);
        break;
      case '/incomes':
        setStatsToDraw(incomesStats);
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
            <th className={s.description}>Описание</th>
            <th className={s.category}>Категория</th>
            <th className={s.summa}>Сумма</th>
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
                <td className={s.category}>{el.category}</td>
                <td className={s.summa}>{el.amount}</td>
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
