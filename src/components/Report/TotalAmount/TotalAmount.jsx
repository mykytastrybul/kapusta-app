import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import {
  getExpenseTotal,
  getIncomeTotal,
} from '../../../redux/reports/reportsSelectors';
import s from './TotalAmount.module.scss';

const TotalAmount = () => {
  const incomeTotal = useSelector(getIncomeTotal);
  const expenseTotal = useSelector(getExpenseTotal);

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
    <div className={s.wrapper}>
      <div className={s.costsWrap}>
        <span className={s.text}>Витрати:</span>
        <span className={s.costsNumber}>
          <NumberFormat
            value={expenseTotal}
            displayType={'text'}
            thousandSeparator={' '}
            suffix={' грн.'}
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'- '}
          />
        </span>
      </div>
      <div className={s.incomesWrap}>
        <span className={s.text}>Доходи:</span>
        <span className={s.incomesNumber}>
          <NumberFormat
            value={incomeTotal}
            displayType={'text'}
            thousandSeparator={' '}
            suffix={' грн.'}
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'+ '}
          />
        </span>
      </div>
    </div>
  );
};

export default TotalAmount;
