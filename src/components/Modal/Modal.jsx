import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import IconSvg from '../../assets/images/symbol-defs.svg';

const modal = document.getElementById('modal');

export default function Modal() {
  // const handleEsc = ({ code }) => {
  //   if (code === 'Escape') {
  //     closeModal();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('keydown', handleEsc);
  //   return () => {
  //     window.removeEventListener('keydown', handleEsc);
  //   };
  // });

  return createPortal(
    <div onClick={null} className={s.overlay}>
      <div className={s.modal}>
        <button className={s.close}>
          <svg className={s.icon}>
            <use xlinkHref={`${IconSvg}#icon-close`}></use>
          </svg>
        </button>
        <p className={s.text}>Вы уверены?</p>
        <div className={s.options}>
          <button className={s.button}>ДА</button>
          <button className={s.button}>НЕТ</button>
        </div>
      </div>
    </div>,
    modal
  );
}
