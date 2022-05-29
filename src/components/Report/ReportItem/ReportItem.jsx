import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/images/symbol-defs.svg';
import s from './ReportTransactionsItem.module.scss';

const ReportTransactionsItem = ({ icon, sum, name, type }) => {
  return (
    <li className={s.item}>
      <NavLink
        to={{
          pathname: '/report',
          search: `type=${
            type === 'ДОХОДЫ' ? 'incomes' : 'expenses'
          }&category=${icon}`,
        }}
        className={({ isActive }) => (!isActive ? s.activeLink : s.link)}
      >
        <p className={s.text}>{sum}</p>
        <div className={s.iconWrapp}>
          <svg width="56" height="56">
            <use href={`${sprite}#icon-${icon}`} />
          </svg>
        </div>
        <p className={s.text}>{name}</p>
      </NavLink>
    </li>
  );
};

export default ReportTransactionsItem;
