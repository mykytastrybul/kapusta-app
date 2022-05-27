import BackToHome from '../../BackToHome/BackToHome';
import Data from '../Data/Data';
import s from './ReportControlPanel.module.scss';

const balance = 10000;

const ReportControlPanel = () => {
  return (
    <div className={s.wrapp}>
      <BackToHome />
      <div className={s.balance}>
        <p className={s.text}>
          Баланс: <span className={s.sum}>{balance} UAH</span>
        </p>
      </div>
      <Data />
    </div>
  );
};

export default ReportControlPanel;
