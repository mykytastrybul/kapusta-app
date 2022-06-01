import DatePicker from 'react-datepicker';
import styles from '../CostsAndIncomesBox/CostsAndIncomesForm/_CostsAndIncomesForm.module.scss';
import iconSprite from '../../assets/images/symbol-defs.svg';

const Calendar = ({ startDate, handleDateChange }) => {
  return (
    <div className={styles['label-date']}>
      <div className={styles['icon-date']}>
        <svg aria-label="calendar" width="20px" height="20px">
          <use href={`${iconSprite}#icon-calendar`}></use>
        </svg>
      </div>
      <div>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          className={styles['input-date']}
          calendarClassName={styles['calendar']}
          selected={startDate}
          onChange={handleDateChange}
          required
        />
      </div>
    </div>
  );
};

export default Calendar;
