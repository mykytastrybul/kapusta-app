import React from 'react';
import s from './_CostsAndIncomesBox.module.scss';
import CostsAndIncomesButtons from './CostsAndIncomesButtons/CostsAndIncomesButtons';
import CostsAndIncomesForm from './CostsAndIncomesForm/CostsAndIncomesForm';
import Summary from '../Summary/Summary';
import TableIncomeOutcome from '../TableIncomeOutcome/TableIncomeOutcome';
import { useMediaQuery } from 'react-responsive';

const CostsAndIncomesBox = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className={s[('page', 'section')]}>
      <div className={s.container}>
        <CostsAndIncomesButtons />
        <div className={s['content-box']}>
          {!isMobile && <CostsAndIncomesForm />}
          <div className={s['tablets-box']}>
            {!isMobile && (
              <>
                <TableIncomeOutcome />
                <Summary />
              </>
            )}
            {isMobile && (
              <>
                <TableIncomeOutcome />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostsAndIncomesBox;
