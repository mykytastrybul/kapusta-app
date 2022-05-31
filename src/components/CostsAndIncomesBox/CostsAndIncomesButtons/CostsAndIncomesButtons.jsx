import { NavLink } from 'react-router-dom';
import s from './_CostsAndIncomesButtons.module.scss';

const CostAndIncomesButtons = () => {
  // const isActive = true;
  return (
    <div className={s.tracker}>
      <NavLink
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        to="/expenses"
      >
        <div className={s.tab}>Витрати</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        to="/incomes"
      >
        <div className={s.tab}>Доходи</div>
      </NavLink>
    </div>
  );
};

export default CostAndIncomesButtons;
