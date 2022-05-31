import { useNavigate } from 'react-router-dom';
import sprite from '../../../assets/images/symbol-defs.svg';
import { makeUkrCatsNames } from '../../../utils/function/translateBackEndResp';
import s from './ControlsByTransType.module.scss';

const ControlsByTransType = ({ type, toggleType }) => {
  const navigate = useNavigate();

  return (
    <div className={s.control}>
      <button
        className={s.button}
        onClick={() => {
          toggleType();
          navigate({
            pathname: '/report',
            search: `type=${
              type !== 'ДОХОДЫ' ? 'incomes' : 'expenses'
            }&category=`,
          });
        }}
      >
        <svg width="4" height="10">
          <use href={sprite + '#left'} />
        </svg>
      </button>
      <div className={s.title}>{makeUkrCatsNames(type)}</div>
      <button
        className={s.button}
        onClick={() => {
          toggleType();
          navigate({
            pathname: '/report',
            search: `type=${
              type !== 'ДОХОДЫ' ? 'incomes' : 'expenses'
            }&category=`,
          });
        }}
      >
        <svg width="4" height="10">
          <use href={sprite + '#right'} />
        </svg>
      </button>
    </div>
  );
};

export default ControlsByTransType;
