import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/symbol-defs.svg';
import s from '../../components/TableIncomeOutcome/TableIncomeOutcome.module.scss';
import { deleteTransaction } from '../../redux/transactions/transactionsOperations';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = e => {
    console.log('del transaction id', id);
    dispatch(deleteTransaction(id));
  };
  return (
    <button
      onClick={handleDeleteClick}
      type="button"
      className={s['delete-btn']}
    >
      <svg className={s.icon} width="18" height="18">
        <use href={`${sprite + '#icon-trashcan'}`}></use>
      </svg>
    </button>
  );
};

export default DeleteButton;
