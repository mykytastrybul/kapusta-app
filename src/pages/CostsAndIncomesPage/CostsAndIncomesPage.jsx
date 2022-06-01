import React, { useEffect } from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import { useMatch, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CostsAndIncomesForm from '../../components/CostsAndIncomesBox/CostsAndIncomesForm/CostsAndIncomesForm';
import { NavLink } from 'react-router-dom';
import s from './CostsAndIncomesPage.module.scss';
import iconSprite from '../../assets/images/symbol-defs.svg';
import { Route, Routes } from 'react-router-dom';
const CostsAndIncomesPage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const match = useMatch('/main/*');

  useEffect(() => {
    !isMobile && navigate('/main/expenses');
  }, [isMobile]);

  return (
    <>
      <section className={s.section}>
        {!isMobile ? (
          <>
            <Balance />
            <CostsAndIncomesBox />
          </>
        ) : (
          <>
            {match.params['*'] !== 'balance' && (
              <NavLink to="/main/balance">
                <svg className={s['icon-back']} width="24px" height="24px">
                  <use href={`${iconSprite}#icon-arrow-back`}></use>
                </svg>
              </NavLink>
            )}

            <Routes>
              <Route
                path="balance"
                element={
                  <>
                    <Balance />
                    <CostsAndIncomesBox />
                  </>
                }
              />
              <Route path="expenses" element={<CostsAndIncomesForm />} />
              <Route path="incomes" element={<CostsAndIncomesForm />} />
            </Routes>
          </>
        )}
      </section>
    </>
  );
};

export default CostsAndIncomesPage;
