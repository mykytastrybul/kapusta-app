import styles from './_CostsAndIncomesForm.module.scss';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import iconSprite from '../../../assets/images/symbol-defs.svg';

import Select from 'react-select';
const options = [
  { value: "Продукты", label: "Продукты" },
  { value:  "Алкоголь", label:  "Алкоголь" },
  { value:  "Развлечения", label:  "Развлечения" },
  { value: "Здоровье", label: "Здоровье" },
  { value:  "Транспорт", label:  "Транспорт" },
  { value: "Всё для дома", label: "Всё для дома" },
  { value: "Техника", label: "Техника" },
  { value: "Коммуналка и связь", label: "Коммуналка и связь" },
  { value: "Спорт и хобби", label: "Спорт и хобби" },
  { value: "Образование", label: "Образование" },
  { value: "Прочее", label:  "Прочее" },
];

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
          onChange={date => setStartDate(date)}
        />
        <svg
          className={styles['icon-date']}
          aria-label="calendar"
          width="20px"
          height="20px"
        >
          <use href={`${iconSprite}#icon-calendar`}></use>
        </svg>
      </label>
      <label htmlFor="item"></label>
      <input
        className={styles['input-item']}
        type="text"
        name="item"
        placeholder="Описание товара"
        //   value={number}
        //   onChange={handleChange}
      />
      <label htmlFor="category"></label>
      <Select
        className={styles['input-category']}
        options={options}
        // type="text"
        // name="category"
        placeholder="Категория товара"
        //   value={number}
        //   onChange={handleChange}
      />

      <label className={styles['label-cost']} htmlFor="cost">
        <input
          className={styles['input-cost']}
          type="number"
          name="cost"
          placeholder="00.00"
          //   value={number}
          //   onChange={handleChange}
        />
        <svg
          className={styles['icon-cost']}
          aria-label="calendar"
          width="20px"
          height="20px"
        >
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
  );
};

export default CostsAndIncomesForm;
