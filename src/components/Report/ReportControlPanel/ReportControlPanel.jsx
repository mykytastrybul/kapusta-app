import { useSelector } from 'react-redux/es/exports';
import authSelectors from '../../../redux/auth/authSelectors';
import BackToHome from '../BackToHome/BackToHome';
import Data from '../Data/Data';
import s from './ReportControlPanel.module.scss';

const ReportControlPanel = () => {
  const balance = useSelector(authSelectors.getBalance);

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
