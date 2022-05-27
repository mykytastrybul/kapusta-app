import React from 'react';
import s from './_CostsAndIncomesBox.module.scss';
import CostsAndIncomesButtons from './CostsAndIncomesButtons/CostsAndIncomesButtons';
import CostsAndIncomesForm from './CostsAndIncomesForm/CostsAndIncomesForm';

const CostsAndIncomesBox = () => {

  return (
    <section className={s['page', 'section']}>
      <div className={s.container}>
      {/* ========== Возможно кнопки это должны быть отдельные компоненты, я пока не понял ==========*/}
      <CostsAndIncomesButtons/>
      {/* ========== Возможно кнопки это должны быть отдельные компоненты, я пока не понял ==========*/}
      <div className={s['content-box']}>
          <CostsAndIncomesForm/>
          {/* Место для компонента табилы */}
          {/* Место для компонента Summary */}
      </div>
      </div>
      </section>
  );
};

export default CostsAndIncomesBox;
