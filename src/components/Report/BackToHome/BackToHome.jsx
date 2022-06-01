import { Link, useLocation } from 'react-router-dom';
import sprite from '../../../assets/images/symbol-defs.svg';
import s from './BackToHome.module.scss';
const BackToHome = () => {
  const location = useLocation();

  return (
    <Link className={s.backLink} to={location.state || '/'}>
      <svg className={s.icon}>
        <use href={`${sprite + '#icon-arrow-back'}`}></use>
      </svg>
      <span className={s.text}>Повернутися на головну</span>
    </Link>
  );
};

export default BackToHome;
