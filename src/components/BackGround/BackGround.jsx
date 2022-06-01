import s from './BackGround.module.scss';

const BackGround = ({ children }) => {
  return <div className={s.bg}>{children}</div>;
};

export default BackGround;
