import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import IconSvg from '../../assets/images/symbol-defs.svg';
import { useEffect } from 'react';

const modal = document.getElementById('modal');

export default function Modal({ text, close, onSubmit }) {
  const handleEsc = ({ code }) => {
    if (code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  return createPortal(
    <div onClick={null} className={s.overlay}>
      <div className={s.modal}>
        <button onClick={close} className={s.close}>
          <svg className={s.icon}>
            <use xlinkHref={`${IconSvg}#icon-close`}></use>
          </svg>
        </button>
        <p className={s.text}>{text}</p>
        <div className={s.options}>
          <button className={s.button} onClick={onSubmit}>
            ТАК
          </button>
          <button className={s.button} onClick={close}>
            НІТ
          </button>
        </div>
      </div>
    </div>,
    modal
  );
}
