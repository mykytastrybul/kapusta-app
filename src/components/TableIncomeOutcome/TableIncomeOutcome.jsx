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
import { makeUkrCatsNames } from '../../utils/function/translateBackEndResp';

export default function TableIncomeOutcome() {
  const dispatch = useDispatch();
  const [statsToDraw, setStatsToDraw] = useState([]);
  const expensesStats = useSelector(state => state.transactions.data.expenses);
  const incomesStats = useSelector(state => state.transactions.data.incomes);
  const location = useLocation();
  const token = useSelector(authSelectors.getToken);
  const allTransactions = useSelector(authSelectors.getTransactions);
  const [numColor, setNumColor] = useState('#e53935');

  useEffect(() => {
    dispatch(getExpenseStats());
    dispatch(getIncomeStats());
    dispatch(allUserInfo(token));
  }, [token, dispatch]);

  const setTdColor = (category)=>{
    let color = '';
    switch (category) {
      case 'Продукты':
        color ='#e53935';
        break;
      case 'Алкоголь':
          color ='#e53935'
        break;
      case 'Развлечения':
          color ='#e53935'
        break;
      case 'Здоровье':
          color ='#e53935'
        break;
      case 'Транспорт':
          color ='#e53935'
        break;
      case 'Всё для дома':
          color ='#e53935'
        break;
      case 'Техника':
          color ='#e53935'
        break;
      case 'Коммуналка и связь':
          color ='#e53935'
        break;
      case 'Спорт и хобби':
          color ='#e53935'
        break;
      case 'Образование':
          color ='#e53935'
        break;
      case 'Прочее':
        color ='#e53935'
        break;
      case 'З/П':
        color ='#407946';
        break;
      case 'Доп. доход':
        color ='#407946';
        break;
      default:
        break;
    }
    return color;
  }
  // const stateToDrawWithColor = [...statsToDraw];

  // useEffect(()=>{
  //   if (stateToDrawWithColor.length){
  //   stateToDrawWithColor.map(el => {
  //     switch (el.category) {
  //       case 'Продукты':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Алкоголь':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Развлечения':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Здоровье':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Транспорт':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Всё для дома':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Техника':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Коммуналка и связь':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Спорт и хобби':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Образование':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'Прочее':
  //         el.color = '#e53935';
  //         el.mark = '- ';
  //         break;
  //       case 'З/П':
  //         el.color = '#407946';
  //         el.mark = '';
  //         break;
  //       case 'Доп. доход':
  //         el.color = '#407946';
  //         el.mark = '';
  //         break;
  //       default:
  //         break;
  //     }
  //     return el;
  //   });
  // }
  // },[stateToDrawWithColor])


  useEffect(() => {
    switch (location.pathname) {
      case '/balance':
        setStatsToDraw(allTransactions);
       
        break;
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
  }, [
    allTransactions,
    expensesStats,
    incomesStats,
    statsToDraw,
    location.pathname,
  ]);

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
                <td style={{ color: setTdColor(el.category) }} className={s.summa}>
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
