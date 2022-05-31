import React from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import s from './CostsAndIncomesPage.module.scss';

const CostsAndIncomesPage = () => {
  return (
    <>
      <div className={s.bg}></div>
      <section className={s.section}>
        <Balance />
        <CostsAndIncomesBox />
      </section>
    </>
  );
};

export default CostsAndIncomesPage;
