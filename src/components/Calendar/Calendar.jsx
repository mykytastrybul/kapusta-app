import DatePicker from 'react-datepicker';
import styles from '../CostsAndIncomesBox/CostsAndIncomesForm/_CostsAndIncomesForm.module.scss';

const Calendar = ({ startDate, handleDateChange }) => {
  return (
    <div className={styles['label-date']}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        className={styles['input-date']}
        calendarClassName={styles['calendar']}
        selected={(startDate = new Date())}
        onChange={handleDateChange}
        required
      />
    </div>
  );
};

export default Calendar;
