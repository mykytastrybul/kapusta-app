import s from '../../components/Summary/Summary.module.scss';

export default function Summary(data) {
  Object.entries(data);

  return (
    <div className={s.summary}>
      <h2 className={s.title}>сводка</h2>
      <ul className={s.list}>
        {Object.entries(data).map((item, idx) => (
          <li key={idx} className={s.item}>
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
