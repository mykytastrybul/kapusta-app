import styles from './_CostsAndIncomesForm.module.scss'
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import iconSprite from '../../../assets/images/symbol-defs.svg'
const CostsAndIncomesForm = () => {
  // console.log(iconCalendar)
    const [startDate, setStartDate] = useState(new Date());
    

    return (
        <form action="submit" className={styles.form}>
            <label className={styles['label-date']} htmlFor="date">
            <DatePicker
               dateFormat="dd.MM.yyyy"
            className={styles['input-date']}
            calendarClassName={styles['calendar']}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
     <svg className={styles['icon-date']} aria-label="calendar" width="20px" height="20px">
      <use href={`${iconSprite}#icon-calendar`}></use>
    </svg>
      </label>
        <label htmlFor="item"></label>
        <input
          className={styles['input-item']}
          type="text"
          name="item"
          placeholder='Описание товара'
        //   value={number}
        //   onChange={handleChange}
        />
         <label htmlFor="category"></label>
        <input
          className={styles['input-category']}
          type="text"
          name="category"
          placeholder='Категория товара'
        //   value={number}
        //   onChange={handleChange}
        />

         <label className={styles['label-cost']} htmlFor="cost">
        <input
          className={styles['input-cost']}
          type="number"
          name="cost"
          placeholder='00.00'
        //   value={number}
        //   onChange={handleChange}
        />
             <svg className={styles['icon-cost']} aria-label="calendar" width="20px" height="20px">
      <use href={`${iconSprite}#icon-calculator`}></use>
    </svg>
        </label>
        
        <button type="submit" className={styles['button-submit']}>
          Ввести
        </button>
        <button type="button" className={styles['button-clear']}>
          Очистити
        </button>
        </form>
    )
}

export default CostsAndIncomesForm;