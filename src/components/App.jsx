import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import {
  allUserInfo,
  // getExpenseStats,
  // getIncomeStats,
} from '../redux/transactions/transactionsOperations';
import { loginGoogle, refreshUser } from '../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import Loader from './Loader';
import HeaderNav from './Header/HeaderNav';
import { useMediaQuery } from 'react-responsive';

const CostsAndIncomesPage = lazy(() =>
  import('../pages/CostsAndIncomesPage/CostsAndIncomesPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const HomePage = lazy(() => import('../pages/CostsAndIncomesPage'));
const ReportPage = lazy(() => import('../pages/ReportPage/ReportPage'));

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // console.log(isMobile);
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
      dispatch(refreshUser());
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(allUserInfo(token));
      // dispatch(getExpenseStats());
      // dispatch(getIncomeStats());
    }
  }, [token, dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {isMobile && (
            <Route
              path="/balance"
              element={
                <PrivateRoute redirectTo={'/login'}>
                  <HeaderNav />
                  <CostsAndIncomesPage />
                </PrivateRoute>
              }
            />
          )}

          <Route
            path="/expenses"
            element={
              <PrivateRoute redirectTo={'/login'}>
                <HeaderNav />
                <CostsAndIncomesPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/incomes"
            element={
              <PrivateRoute redirectTo={'/login'}>
                <HeaderNav />
                <CostsAndIncomesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="report"
            element={
              <PrivateRoute redirectTo={'/login'}>
                <HeaderNav />
                <ReportPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <HeaderNav />
                <LoginPage />
              </PublicRoute>
            }
          />

          {!isMobile && <Route path="*" element={<Navigate to="/expenses" />} />}
          {isMobile && <Route path="*" element={<Navigate to="/balance" />} />}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
