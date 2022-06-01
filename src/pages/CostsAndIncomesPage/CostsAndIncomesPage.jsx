import React, { useState } from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CostsAndIncomesForm from '../../components/CostsAndIncomesBox/CostsAndIncomesForm/CostsAndIncomesForm';
import { NavLink } from 'react-router-dom';
import s from './CostsAndIncomesPage.module.scss';
import iconSprite from '../../assets/images/symbol-defs.svg';
import Calendar from '../../components/Calendar/Calendar';
import { useDispatch } from 'react-redux';
import { setDateFilter } from '../../redux/transactions/transactionsSlice';
// import TableIncomeOutcome from '../../components/TableIncomeOutcome/TableIncomeOutcome';

const CostsAndIncomesPage = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = date => {
    setStartDate(date);
    const refDate = date.toISOString().substring(0, 10);
    dispatch(setDateFilter(refDate));
  };
  const showSuitableBox = () => {
    switch (location.pathname) {
      case '/balance':
        return (
          <>
            <Balance />
            <Calendar
              startDate={startDate}
              handleDateChange={handleDateChange}
            />
            {/* <CostsAndIncomesForm /> */}
            <CostsAndIncomesBox />
            {/* <TableIncomeOutcome /> */}
          </>
        );
      case '/expenses':
        if (isMobile) {
          return (
            <div className={s.wrap}>
            <div className={s['btn-back']}>
              <NavLink to="/balance">
                <svg className={s['icon-back']} width="24px" height="24px">
                  <use href={`${iconSprite}#icon-arrow-back`}></use>
                </svg>
              </NavLink>
            </div>

            <CostsAndIncomesForm />
            {/* <CostAndIncomesButtons /> */}
          </div>
          );
        }
        return;

      case '/incomes':
        if (isMobile) {
          return (
            <div className={s.wrap}>
            <div className={s['btn-back']}>
              <NavLink to="/balance">
                <svg className={s['icon-back']} width="24px" height="24px">
                  <use href={`${iconSprite}#icon-arrow-back`}></use>
                </svg>
              </NavLink>
            </div>
            <CostsAndIncomesForm />
            {/* <CostAndIncomesButtons /> */}
          </div>
          );
        }
        return;

      // case '/balance':
      // if (isMobile) {
      //   return (
      //     <>
      //       <CostsAndIncomesForm />
      //       {/* <CostAndIncomesButtons /> */}
      //     </>
      //   );
      // }

      default:
        break;
    }
  };

  return (
    <>
      {/* <div className={s.bg}></div> */}
      <section className={s.section}>
        {!isMobile && (
          <>
            <Balance />
            <CostsAndIncomesBox />
          </>
        )}

        {showSuitableBox()}
      </section>
    </>
  );
};

export default CostsAndIncomesPage;
