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
import { useLocation, useMatch } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { setDateFilter } from '../../../redux/transactions/transactionsSlice';

const CostsAndIncomesForm = () => {
  const location = useLocation();
  const match = useMatch('/main/*');
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const refDate = startDate.toISOString().substring(0, 10);

  const [descr, setDescr] = useState('');

  const [category, setCategory] = useState(null);

  const [cost, setCost] = useState('');

  const handleDescrChange = e => setDescr(e.currentTarget.value);
  const handleCategoryChange = option => setCategory(option);
  const handleCostChange = e => setCost(e.currentTarget.value);

  const setOptions = () => {
    switch (match.params['*']) {
      case 'expenses':
        return [
          { value: 'Продукты', label: 'Продукти' },
          { value: 'Алкоголь', label: 'Алкоголь' },
          { value: 'Развлечения', label: 'Розваги' },
          { value: 'Здоровье', label: "Здоров'я" },
          { value: 'Транспорт', label: 'Транспорт' },
          { value: 'Всё для дома', label: 'Все для дому' },
          { value: 'Техника', label: 'Техніка' },
          { value: 'Коммуналка и связь', label: "Коммуналка и зв'язок" },
          { value: 'Спорт и хобби', label: 'Спорт і хобі' },
          { value: 'Образование', label: 'Освіта' },
          { value: 'Прочее', label: 'Інше' },
        ];
      // return expensesCats;

      case 'incomes':
        return [
          { value: 'З/П', label: 'З/П' },
          { value: 'Доп. доход', label: 'Дод. дохід' },
        ];
      // return incomeCats;

      default:
        return;
    }
  };

  const amount = +cost
    .split(' ')
    .slice(0, cost.split(' ').length - 1)
    .join('');

  const submitHandler = e => {
    e.preventDefault();
    switch (location.pathname) {
      case '/expenses':
        dispatch(
          expenseTransaction({
            description: descr,
            amount,
            date: refDate,
            category: category.value,
          })
        );
        break;
      case '/incomes':
        dispatch(
          incomeTransaction({
            description: descr,
            amount,
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

  const handleCLick = () => {
    setDescr('');
    setCost('');
    setCategory(null);
  };

  const handleDateChange = date => {
    setStartDate(date);
    const refDate = date.toISOString().substring(0, 10);
    dispatch(setDateFilter(refDate));
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
            onChange={handleDateChange}
            required
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
          placeholder="Опис товару"
          value={descr}
          onChange={handleDescrChange}
          required
          minLength={1}
          maxLength={300}
        />
        <label htmlFor="category"></label>
        <Select
          className={styles['input-category']}
          options={setOptions()}
          // type="text"
          name="category"
          placeholder="Виберіть категорию"
          value={category}
          onChange={handleCategoryChange}
          required
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
            required
            minLength={1}
            maxLength={1000000000}
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
        <button
          type="button"
          className={styles['button-clear']}
          onClick={handleCLick}
        >
          Очистити
        </button>
      </div>
    </form>
  );
};

export default CostsAndIncomesForm;
