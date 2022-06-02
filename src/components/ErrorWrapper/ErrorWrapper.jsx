import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { resetError } from '../../redux/auth/authSlice';

const ErrorWrapper = ({ children }) => {
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      switch (error) {
        case 403:
          toast.error('Невірна електронна пошта чи пароль');
          break;
        case 409:
          toast.error('Такий користувач вже є');
          break;
        default:
          toast.error('Помилка!');
      }
      dispatch(resetError());
    }
  }, [error]);
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ErrorWrapper;
