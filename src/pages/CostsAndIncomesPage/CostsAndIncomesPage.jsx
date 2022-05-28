import React from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';

const CostsAndIncomesPage = () => {
  return (
    <section className={'page'}>
      <Balance />
      <CostsAndIncomesBox />
    </section>
  );
};

export default CostsAndIncomesPage;
