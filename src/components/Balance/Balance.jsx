import NumberFormat from 'react-number-format';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Balance.module.scss';
import IconSvg from '../../assets/images/symbol-defs.svg';
import BalanceModal from './BalanceModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { setBalance } from '../../redux/transactions/transactionsOperations';

const Balance = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const storeBalance = useSelector(authSelectors.getBalance);
  const [balanceState, setBalanceState] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = e => {
    const value = e.target.value;
    setBalanceState(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      setBalance(
        +balanceState
          .split(' ')
          .slice(0, balanceState.split(' ').length - 1)
          .join('')
      )
    );
  };

  useEffect(() => {
    setBalanceState(storeBalance);
    if (storeBalance === 0) setModalOpen(true);
  }, [storeBalance]);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.container_link}>
          <NavLink
            className={s.link}
            to={{
              pathname: '/report',
            }}
            state={location}
          >
            Перейти до звітів
            <svg className={s.icon}>
              <use xlinkHref={`${IconSvg}#icon-chart`}></use>
            </svg>
          </NavLink>
        </div>
        <div className={s.balance}>
          <p className={s.balance_text}>Баланс:</p>
          <form className={s.form} onSubmit={handleSubmit}>
            <NumberFormat
              className={s.input}
              name="balance"
              value={balanceState}
              onChange={handleChange}
              thousandSeparator=" "
              decimalSeparator="."
              decimalScale={2}
              fixedDecimalScale={true}
              suffix=" UAH"
              type="text"
              placeholder="00.00 UAH"
              minLength={1}
              maxLength={1000000000}
            />
            <button className={s.button} type="submit">
              ПІДТВЕРДИТИ
            </button>
            {modalOpen && <BalanceModal />}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Balance;
