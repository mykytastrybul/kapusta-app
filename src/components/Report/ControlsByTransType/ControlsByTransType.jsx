import { useNavigate } from 'react-router-dom';
import sprite from '../../../assets/images/symbol-defs.svg';
import { langOpts } from '../../../utils/function/translateBackEndResp';
import s from './ControlsByTransType.module.scss';

const ControlsByTransType = ({ type, toggleType }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    toggleType();
    navigate({
      pathname: '/report',
      search: `type=${type !== 'incomes' ? 'incomes' : 'expenses'}`,
    });
  };

  return (
    <div className={s.control}>
      <button className={s.button} onClick={handleClick}>
        <svg width="4" height="10">
          <use href={sprite + '#left'} />
        </svg>
      </button>
      <div className={s.title}>{langOpts[type].ua}</div>
      <button className={s.button} onClick={handleClick}>
        <svg width="4" height="10">
          <use href={sprite + '#right'} />
        </svg>
      </button>
    </div>
  );
};

export default ControlsByTransType;
