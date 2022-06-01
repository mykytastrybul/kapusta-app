import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sprite from '../../../assets/images/symbol-defs.svg';
import { langOpts } from '../../../utils/function/translateBackEndResp';
import s from './ReportTransactionsItem.module.scss';

const ReportTransactionsItem = ({ icon, sum, name, type }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      new URLSearchParams(location.search).get('category') &&
      new URLSearchParams(location.search).get('type')
    ) {
      if (new URLSearchParams(location.search).get('category') === icon) {
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
            type === 'incomes' ? 'incomes' : 'expenses'
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
        <p className={s.text}>{langOpts[name].ua}</p>
      </NavLink>
    </li>
  );
};

export default ReportTransactionsItem;
