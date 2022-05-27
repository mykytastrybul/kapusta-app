import { createPortal } from 'react-dom';
import s from './BalanceModal.module.scss';

const modal = document.getElementById('modal');

export default function BalanceModal() {
  return createPortal(
    <div onClick={null} className={s.modal}>
      <p className={s.info}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={s.text}>Ты не можешь тратить деньги пока их у тебя нет</p>
    </div>,
    modal
  );
}
