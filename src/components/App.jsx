import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import { allUserInfo } from '../redux/transactions/transactionsOperations';
import { loginGoogle } from '../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import Loader from './Loader';
import HeaderNav from './Header/HeaderNav';
import BackGround from './BackGround/BackGround';
import Redirect from './Redirect/Redirect';
import ErrorWrapper from './ErrorWrapper/ErrorWrapper';

const CostsAndIncomesPage = lazy(() =>
  import('../pages/CostsAndIncomesPage/CostsAndIncomesPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ReportPage = lazy(() => import('../pages/ReportPage/ReportPage'));

function App() {
  const location = useLocation();
  const accessToken = new URLSearchParams(location.search).get('accessToken');
  const refreshToken = new URLSearchParams(location.search).get('refreshToken');
  const sid = new URLSearchParams(location.search).get('sid');

  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(loginGoogle({ accessToken, refreshToken, sid }));
      dispatch(allUserInfo(accessToken));
    } // eslint-disable-next-line
  }, [accessToken, refreshToken, sid]);

  useEffect(() => {
    if (token) {
      dispatch(allUserInfo(token));
    }
  }, [token, dispatch]);

  return (
    <ErrorWrapper>
      <HeaderNav />
      <BackGround>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/main/*"
              element={
                <PrivateRoute redirectTo={'/login'}>
                  <CostsAndIncomesPage />
                </PrivateRoute>
              }
            />

            <Route
              path="report"
              element={
                <PrivateRoute redirectTo={'/login'}>
                  <ReportPage />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route path="*" element={<Redirect />} />
          </Routes>
        </Suspense>
      </BackGround>
    </ErrorWrapper>
  );
}

export default App;
