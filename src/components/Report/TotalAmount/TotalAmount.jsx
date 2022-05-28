import s from './TotalAmount.module.scss';

const TotalAmount = ({ totalCosts, totalIncomes }) => {
  const makePrettyNumber = number => {
    if (number === 0) {
      return number;
    } else if (number > 0) {
      return `+ ${number.toLocaleString()}.00`;
    } else if (number < 0) {
      return `- ${Math.abs(number).toLocaleString()}.00`;
    }
  };
  return (
    <section>
      <div className={s.wrapper}>
        <div className={s.costsWrap}>
          <span className={s.text}>Витрати:</span>
          <span className={s.costsNumber}>
            {makePrettyNumber(-totalCosts)}&nbsp;грн.
          </span>
        </div>
        <div className={s.incomesWrap}>
          <span className={s.text}>Доходи:</span>
          <span className={s.incomesNumber}>
            {makePrettyNumber(totalIncomes)}&nbsp;грн.
          </span>
        </div>
      </div>
    </section>
  );
};

export default TotalAmount;
