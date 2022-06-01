import React from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CostsAndIncomesForm from '../../components/CostsAndIncomesBox/CostsAndIncomesForm/CostsAndIncomesForm';
import { NavLink } from 'react-router-dom';
import s from './CostsAndIncomesPage.module.scss';
import iconSprite from '../../assets/images/symbol-defs.svg';
// import TableIncomeOutcome from '../../components/TableIncomeOutcome/TableIncomeOutcome';

const CostsAndIncomesPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const showSuitableBox = () => {
    switch (location.pathname) {
      case '/balance':
        return (
          <>
            <Balance />
            <CostsAndIncomesBox />
            {/* <TableIncomeOutcome /> */}
          </>
        );
      case '/expenses':
        if (isMobile) {
          return (
            <>
              {' '}
              <NavLink to="/balance">
                {' '}
                <svg className={s['icon-back']} width="24px" height="24px">
                  <use href={`${iconSprite}#icon-arrow-back`}></use>
                </svg>
              </NavLink>
              <CostsAndIncomesForm />
              {/* <CostAndIncomesButtons /> */}
            </>
          );
        }
        return;

      case '/incomes':
        if (isMobile) {
          return (
            <>
              <NavLink to="/balance">
                <svg className={s['icon-back']} width="24px" height="24px">
                  <use href={`${iconSprite}#icon-arrow-back`}></use>
                </svg>
              </NavLink>
              <CostsAndIncomesForm />
              {/* <CostAndIncomesButtons /> */}
            </>
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
      <div className={s.bg}></div>
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
