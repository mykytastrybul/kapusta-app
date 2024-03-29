import s from '../../components/TableIncomeOutcome/TableIncomeOutcome.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import {
  allUserInfo,
  getExpenseStats,
  getIncomeStats,
} from '../../redux/transactions/transactionsOperations';
import authSelectors from '../../redux/auth/authSelectors';
import NumberFormat from 'react-number-format';
import { langOpts } from '../../utils/function/translateBackEndResp';
import { setTdColor } from '../../utils/function/setTdColor';

export default function TableIncomeOutcome() {
  const dispatch = useDispatch();
  const [statsToDraw, setStatsToDraw] = useState([]);
  const expensesStats = useSelector(state => state.transactions.data.expenses);
  const incomesStats = useSelector(state => state.transactions.data.incomes);
  const dateFilter = useSelector(state => state.transactions.dateFilter);
  const location = useLocation();
  const token = useSelector(authSelectors.getToken);
  const allTransactions = useSelector(authSelectors.getTransactions);

  useEffect(() => {
    dispatch(getExpenseStats());
    dispatch(getIncomeStats());
    dispatch(allUserInfo(token));
  }, [token, dispatch]);

  useEffect(() => {
    switch (location.pathname) {
      case '/main/balance':
        setStatsToDraw(allTransactions);

        break;
      case '/main/expenses':
        setStatsToDraw(expensesStats);
        break;
      case '/main/incomes':
        setStatsToDraw(incomesStats);
        break;
      default:
        break;
    }
  }, [
    allTransactions,
    expensesStats,
    incomesStats,
    statsToDraw,
    location.pathname,
  ]);

  const filterStatsByDate = stats =>
    dateFilter ? stats.filter(el => el.date === dateFilter) : stats;

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
            filterStatsByDate(statsToDraw).map(el => (
              <tr key={el._id} className={s.line}>
                <td className={s.date}>{el.date}</td>
                <td className={`${s['cell-desc']} ${s.description}`}>
                  <span>{el.description}</span>
                </td>
                <td className={s.category}>{langOpts[el.category].ua}</td>
                <td
                  style={{ color: setTdColor(el.category) }}
                  className={s.summa}
                >
                  <NumberFormat
                    value={el.amount}
                    displayType={'text'}
                    thousandSeparator={' '}
                    suffix={' грн.'}
                    prefix={setTdColor(el.category) === '#e53935' && '- '}
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
