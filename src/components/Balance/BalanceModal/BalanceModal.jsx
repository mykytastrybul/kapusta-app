import { createPortal } from 'react-dom';
import s from './BalanceModal.module.scss';

const modal = document.getElementById('modal');

export default function BalanceModal() {
  return createPortal(
    <div onClick={null} className={s.modal}>
      <p className={s.info}>
        Привіт! Для початку роботи внеси поточний баланс свого рахунку!
      </p>
      <p className={s.text}>
        Ти не можеш витрачати гроші, поки їх у тебе немає :)
      </p>
    </div>,
    modal
  );
}
