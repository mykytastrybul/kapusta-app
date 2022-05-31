import React from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import s from './CostsAndIncomesPage.module.scss';

const CostsAndIncomesPage = () => {
  return (
    <section className={s.section}>
      <div className={s.bg}></div>
      <Balance />
      <CostsAndIncomesBox />
    </section>
  );
};

export default CostsAndIncomesPage;
