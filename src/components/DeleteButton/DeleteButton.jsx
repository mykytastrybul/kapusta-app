import { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/symbol-defs.svg';
import s from '../../components/TableIncomeOutcome/TableIncomeOutcome.module.scss';
import { deleteTransaction } from '../../redux/transactions/transactionsOperations';
import Modal from '../Modal/Modal';

const DeleteButton = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteSubmit = () => {
    dispatch(deleteTransaction(id));
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal
          text="Ви впевнені?"
          close={() => {
            setShowModal(false);
          }}
          onSubmit={handleDeleteSubmit}
        />
      )}
      <button
        onClick={() => {
          setShowModal(true);
        }}
        type="button"
        className={s['delete-btn']}
      >
        <svg className={s.icon} width="18" height="18">
          <use href={`${sprite + '#icon-trashcan'}`}></use>
        </svg>
      </button>
    </>
  );
};

export default DeleteButton;
