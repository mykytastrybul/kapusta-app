import s from '../../components/TableIncomeOutcome/TableIncomeOutcome.module.scss';

// import sprite from '../../assets/images/symbol-defs.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';

export default function TableIncomeOutcome() {
  const [statsToDraw, setStatsToDraw] = useState([]);
  const expensesStats = useSelector(state => state.transactions.data.expenses);
  const incomesStats = useSelector(state => state.transactions.data.incomes);
  const location = useLocation();

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
