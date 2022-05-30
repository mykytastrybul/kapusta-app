import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import s from '../../components/Summary/Summary.module.scss';

export default function Summary() {
  const expensesData = useSelector(
    state => state.transactions.monthStats.expenses
  );
  const incomesData = useSelector(
    state => state.transactions.monthStats.incomes
  );
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/expenses':
        setData(expensesData);
        break;
      case '/incomes':
        setData(incomesData);
        break;
      default:
        break;
    }
  }, [expensesData, incomesData, location.pathname]);

  return (
    <div className={s.summary}>
      <h2 className={s.title}>сводка</h2>
      <ul className={s.list}>
        {Object.entries(data).map((item, idx) => (
          <li key={idx} className={s.item}>
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
