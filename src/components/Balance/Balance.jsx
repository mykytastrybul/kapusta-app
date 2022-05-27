import { NavLink } from 'react-router-dom';
import s from './Balance.module.scss';
import IconSvg from '../../assets/images/symbol-defs.svg';

export default function Balance() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.container_link}>
          <NavLink className={s.link} to="/">
            Перейти к отчетам
            <svg className={s.icon}>
              <use xlinkHref={`${IconSvg}#icon-chart`}></use>
            </svg>
          </NavLink>
        </div>
        <div className={s.balance}>
          <p className={s.balance_text}>Баланс:</p>
          <form className={s.form}>
            <input
              className={s.input}
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              placeholder="00.00 UAH"
            />
            <button className={s.button} type="submit">
              ПОДТВЕРДИТЬ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
