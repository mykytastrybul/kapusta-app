import { NavLink } from 'react-router-dom';
import s from './_CostsAndIncomesButtons.module.scss';

const CostAndIncomesButtons = () => {
  const isActive = true;
  return (
    <div className={s.tracker}>
      <div className={isActive ? s['tracker-tab-active'] : s['tracker-tab']}>
        <NavLink
          to="/expenses"
          className={isActive ? s['link-active'] : s['link']}
          href=""
        >
          Витрати
        </NavLink>
      </div>
      <div className={!isActive ? s['tracker-tab-active'] : s['tracker-tab']}>
        <NavLink
          to="/incomes"
          className={!isActive ? s['link-active'] : s['link']}
          href=""
        >
          Доходи
        </NavLink>
      </div>
    </div>
  );
};

export default CostAndIncomesButtons;
