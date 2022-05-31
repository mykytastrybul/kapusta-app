import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sprite from '../../../assets/images/symbol-defs.svg';
import { makeUkrCatsNames } from '../../../utils/function/translateBackEndResp';
import s from './ReportTransactionsItem.module.scss';

const ReportTransactionsItem = ({ icon, sum, name, type }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      location.search.split('&')[1].slice(9) &&
      location.search.split('&')[0].slice(6)
    ) {
      if (location.search.split('&')[1].slice(9) === icon) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
    //eslint-disable-next-line
  }, [location]);

  return (
    <li className={s.item}>
      <NavLink
        to={{
          pathname: '/report',
          search: `type=${
            type === 'ДОХОДЫ' ? 'incomes' : 'expenses'
          }&category=${icon}`,
        }}
        className={() => (isActive ? s.activeLink : s.link)}
      >
        <p className={s.text}>{sum}</p>
        <div className={s.iconWrapp}>
          <svg width="56" height="56">
            <use href={`${sprite}#icon-${icon}`} />
          </svg>
        </div>
        <p className={s.text}>{makeUkrCatsNames(name)}</p>
      </NavLink>
    </li>
  );
};

export default ReportTransactionsItem;
