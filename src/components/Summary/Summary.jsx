import s from '../../components/Summary/Summary.module.scss';

export default function Summary() {
  return (
    <div className={s.summary}>
      <h2 className={s.title}>сводка</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <p>ноябрь</p>
          <p>10000</p>
        </li>
        <li className={s.item}>
          <p>октябрь</p>
          <p>10000</p>
        </li>
        <li className={s.item}>
          <p>сентябрь</p>
          <p>10000</p>
        </li>
        <li className={s.item}>
          <p>август</p>
          <p>10000</p>
        </li>
        <li className={s.item}>
          <p>июль</p>
          <p>10000</p>
        </li>
        <li className={s.item}>
          <p>июнь</p>
          <p>10000</p>
        </li>
        <li className={s.item}>
          <p>май</p>
          <p>10000</p>
        </li>
      </ul>
    </div>
  );
}
