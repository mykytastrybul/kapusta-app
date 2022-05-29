import React from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import HeaderNav from '../../components/Header/HeaderNav';

const CostsAndIncomesPage = () => {
  return (
    <>
      <HeaderNav />
      <section className={'page'}>
        <Balance />
        <CostsAndIncomesBox />
      </section>
    </>
  );
};

export default CostsAndIncomesPage;
