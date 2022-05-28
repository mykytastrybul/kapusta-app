import { NavLink } from 'react-router-dom';
import s from './Balance.module.scss';
import IconSvg from '../../assets/images/symbol-defs.svg';
import BalanceModal from './BalanceModal';
import { useState } from 'react';

export default function Balance() {
  const [balance, setBalance] = useState('');
  const handleChange = e => {
    const value = e.target.value;
    setBalance(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.container_link}>
          <NavLink className={s.link} to="/report">
            Перейти к отчетам
            <svg className={s.icon}>
              <use xlinkHref={`${IconSvg}#icon-chart`}></use>
            </svg>
          </NavLink>
        </div>
        <div className={s.balance}>
          <p className={s.balance_text}>Баланс:</p>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.input}
              name="balance"
              value={balance}
              onChange={handleChange}
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              placeholder="00.00 UAH"
            />
            <button className={s.button} type="submit">
              ПОДТВЕРДИТЬ
            </button>
            {!balance && <BalanceModal />}
          </form>
        </div>
      </div>
    </div>
  );
}
