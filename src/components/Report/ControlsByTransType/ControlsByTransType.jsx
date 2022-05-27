import sprite from '../../../assets/images/symbol-defs.svg';
import s from './ControlsByTransType.module.scss';

const ControlsByTransType = ({type}) => {
  return (
    <div className={s.control}>
      <button className={s.button}>
        <svg width="4" height="10">
          <use href={sprite + '#left'} />
        </svg>
      </button>
      <div className={s.title}>{type}</div>
      <button className={s.button}>
        <svg width="4" height="10">
          <use href={sprite + '#right'} />
        </svg>
      </button>
    </div>
  );
};

export default ControlsByTransType;
