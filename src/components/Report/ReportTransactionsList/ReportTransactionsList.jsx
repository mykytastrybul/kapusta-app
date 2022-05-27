import ReportTransactionsItem from '../ReportItem/ReportItem';
import ControlsByTransType from '../ControlsByTransType/ControlsByTransType';
import s from './ReportTransactionsList.module.scss';

const transactionsList = [
  {
    sum: 150,
    icon: 'products',
    name: 'продукты',
  },
  {
    sum: 100,
    icon: 'alcohol',
    name: 'алкоголь',
  },
  {
    sum: 250,
    icon: 'fun',
    name: 'зазвлечения',
  },
  {
    sum: 80,
    icon: 'health',
    name: 'здоровье',
  },
  {
    sum: 70,
    icon: 'transport',
    name: 'транспорт',
  },
];
const type = 'PACХОДЫ';

const ReportTransactionsList = () => {
  return (
    <div className={s.wrapper}>
      <ControlsByTransType type={type} />

      {transactionsList.length > 0 ? (
        <ul className={s.list}>
          {transactionsList.map(({ icon, sum, name }) => (
            <ReportTransactionsItem
              icon={icon}
              sum={sum}
              name={name}
              key={icon}
            />
          ))}
        </ul>
      ) : (
        <p className={s.text}>За данный период транзакций нет</p>
      )}
    </div>
  );
};

export default ReportTransactionsList;
