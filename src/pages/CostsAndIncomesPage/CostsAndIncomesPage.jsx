import React from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import Modal from '../../components/Modal/Modal';

const CostsAndIncomesPage = () => {
  return (
    <section className={'page'}>
      <Balance />
      <CostsAndIncomesBox />
    </section>
  );
};

export default CostsAndIncomesPage;
