import s from './CostsAndIncomesBox.module.css';
import CostsAndIncomesForm from './CostsAndIncomesForm/CostsAndIncomesForm';

const CostsAndIncomesBox = () => {
  const isActive = true;
  return (
    <section className="page">
      {/* ========== Возможно ссылки это должны быть отдельные компоненты, я пока не понял ==========*/}
      <div className={s.links}>
        <div className={isActive ? s['tracker-tab-active'] : s['tracker-tab']}>
          <a className={isActive ? s['link-active'] : s['link']} href="">
            Витрати
          </a>
        </div>
        <div className={!isActive ? s['tracker-tab-active'] : s['tracker-tab']}>
          <a className={!isActive ? s['link-active'] : s['link']} href="">
            Доходи
          </a>
        </div>
      </div>
      {/* ========== Возможно ссылки это должны быть отдельные компоненты, я пока не понял ==========*/}
      <div class={s['content-box']}>
          <CostsAndIncomesForm/>
      </div>
    </section>
  );
};

export default CostsAndIncomesBox;
