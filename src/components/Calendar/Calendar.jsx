import DatePicker, { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import styles from '../CostsAndIncomesBox/CostsAndIncomesForm/_CostsAndIncomesForm.module.scss';
import iconSprite from '../../assets/images/symbol-defs.svg';
registerLocale('uk', uk);

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
          locale={uk}
          required
        />
      </div>
    </div>
  );
};

export default Calendar;
