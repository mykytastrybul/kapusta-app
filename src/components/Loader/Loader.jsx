import { FallingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={s.container}>
      <FallingLines width="150px" color="var(--background-orange)" />
    </div>
  );
}
