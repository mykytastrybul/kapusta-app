import React from 'react';
import s from './_CostsAndIncomesBox.module.scss';
import CostsAndIncomesButtons from './CostsAndIncomesButtons/CostsAndIncomesButtons';
import CostsAndIncomesForm from './CostsAndIncomesForm/CostsAndIncomesForm';
import Summary from '../Summary/Summary';
import TableIncomeOutcome from '../TableIncomeOutcome/TableIncomeOutcome';

const CostsAndIncomesBox = () => {
  return (
    <section className={s[('page', 'section')]}>
      <div className={s.container}>
        <CostsAndIncomesButtons />
        <div className={s['content-box']}>
          <CostsAndIncomesForm />
          <TableIncomeOutcome />
          <Summary />
        </div>
      </div>
    </section>
  );
};

export default CostsAndIncomesBox;
