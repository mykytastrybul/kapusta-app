import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted,
  redirectTo = '/home',
}) {
  const token = useSelector(authSelectors.getToken);

  return token && restricted ? <Navigate replace to={redirectTo} /> : children;
}
