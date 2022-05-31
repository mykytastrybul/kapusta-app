import styles from './_CostsAndIncomesForm.module.scss';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import iconSprite from '../../../assets/images/symbol-defs.svg';
import { useDispatch } from 'react-redux';

import Select from 'react-select';
import {
  expenseTransaction,
  incomeTransaction,
} from '../../../redux/transactions/transactionsOperations';
import { useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';



const CostsAndIncomesForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.log(iconCalendar)
  const [startDate, setStartDate] = useState(new Date());
  // console.log('startDate: ', startDate);
  const refDate = startDate.toISOString().substring(0, 10);
  // console.log('refDate: ', refDate);

  const [descr, setDescr] = useState('');

  const [category, setCategory] = useState(null);

  const [cost, setCost] = useState('');

  const handleDescrChange = e => setDescr(e.currentTarget.value);
  const handleCategoryChange = option => setCategory(option);
  const handleCostChange = e => setCost(e.currentTarget.value);
  // console.log('descr: ', descr);
  // console.log('category: ', category);
  // console.log('cost: ', cost);

  const setOptions = () => {
    switch(location.pathname) {
      case '/expenses':
        return [{ value: 'Продукты', label: 'Продукты' },
        { value: 'Алкоголь', label: 'Алкоголь' },
        { value: 'Развлечения', label: 'Развлечения' },
        { value: 'Здоровье', label: 'Здоровье' },
        { value: 'Транспорт', label: 'Транспорт' },
        { value: 'Всё для дома', label: 'Всё для дома' },
        { value: 'Техника', label: 'Техника' },
        { value: 'Коммуналка и связь', label: 'Коммуналка и связь' },
        { value: 'Спорт и хобби', label: 'Спорт и хобби' },
        { value: 'Образование', label: 'Образование' },
        { value: 'Прочее', label: 'Прочее' },];
  
        case '/incomes':
          return [{ value: 'З/П', label: 'З/П' },
          { value: 'Доп. доход', label: 'Доп. доход' },
          ];

          default:
            return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    switch (location.pathname) {
      case '/expenses':
        dispatch(
          expenseTransaction({
            description: descr,
            amount: cost
              .split(' ')
              .slice(0, cost.split(' ').length - 1)
              .join(''),
            date: refDate,
            category: category.value,
          })
        );
        break;
      case '/incomes':
        dispatch(
          incomeTransaction({
            description: descr,
            amount: cost
              .split(' ')
              .slice(0, cost.split(' ').length - 1)
              .join(''),
            date: refDate,
            category: category.value,
          })
        );
        break;
      default:
        break;
    }

    setDescr('');
    setCost('');
    setCategory(null);
  };

  return (
    <form action="submit" className={styles.form} onSubmit={submitHandler}>
      <div className={styles['inputs-wrapper']}>
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
        value={descr}
        onChange={handleDescrChange}
      />
      <label htmlFor="category"></label>
      <Select
        className={styles['input-category']}
        options={setOptions()}
        // type="text"
        name="category"
        placeholder="Выберите категорию"
        value={category}
        onChange={handleCategoryChange}
      />

      <label className={styles['label-cost']} htmlFor="cost">
        <NumberFormat
          className={styles['input-cost']}
          name="cost"
          thousandSeparator=" "
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale={true}
          suffix=" UAH"
          type="text"
          placeholder="00.00 UAH"
          value={cost}
          onChange={handleCostChange}
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
      </div>
      <div className={styles['buttons-wrapper']}>
      <button type="submit" className={styles['button-submit']}>
        Ввести
      </button>
      <button type="button" className={styles['button-clear']}>
        Очистити
      </button>
      </div>
    </form>
  );
};

export default CostsAndIncomesForm;
