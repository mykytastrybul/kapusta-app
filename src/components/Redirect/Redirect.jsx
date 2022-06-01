import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

const Redirect = () => {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isAuth ? (
    <Navigate to={isMobile ? '/main/balance' : '/main/expenses'} />
  ) : (
    <Navigate to="/login" />
  );
};

export default Redirect;
