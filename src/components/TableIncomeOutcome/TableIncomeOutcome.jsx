import s from '../../components/TableIncomeOutcome/TableIncomeOutcome.module.scss';

import sprite from '../../assets/images/symbol-defs.svg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function TableIncomeOutcome() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  useEffect(() => {});

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
          <tr className={s.line}>
            <td className={s.date}>05.09.2019</td>
            <td className={`${s['cell-desc']} ${s.description}`}>
              <span>
                Метро (Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, nesciunt)
              </span>
            </td>
            <td className={s.category}>Транспорт</td>
            <td className={s.summa}>-3000.00 грн.</td>
            <td className={s.delete}>
              <button type="button" className={s['delete-btn']}>
                <svg className={s.icon} width="18" height="18">
                  <use href={`${sprite + '#icon-trashcan'}`}></use>
                </svg>
              </button>
            </td>
          </tr>
          <tr className={s.line}>
            <td className={s.date}></td>
            <td className={`${s['cell-desc']} ${s.description}`}>
              <span></span>
            </td>
            <td className={s.category}></td>
            <td className={s.summa}></td>
            <td className={`${s['cell-delete']} ${s.delete}`}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
