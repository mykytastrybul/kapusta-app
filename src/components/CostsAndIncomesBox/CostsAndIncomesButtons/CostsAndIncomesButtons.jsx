import { NavLink } from 'react-router-dom';
import s from './_CostsAndIncomesButtons.module.scss';

const CostAndIncomesButtons = () => {
  return (
    <div className={s.tracker}>
      <NavLink
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        to="/main/expenses"
      >
        <div className={s.tab}>Витрати</div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.linkActive : s.link)}
        to="/main/incomes"
      >
        <div className={s.tab}>Доходи</div>
      </NavLink>
    </div>
  );
};

export default CostAndIncomesButtons;
