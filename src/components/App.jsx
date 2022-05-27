import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import { allUserInfo } from '../redux/transactions/transactionsOperations';
import { loginGoogle } from '../redux/auth/authOperations';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const HomePage = lazy(() => import('../pages/CostsAndIncomesPage'));
// const ReportPage = lazy(() => import('../pages/ReportPage'));

function App() {
  const { accessToken, refreshToken, sid } = queryString.parse(
    window.location.search
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(loginGoogle({ accessToken, refreshToken, sid }));
      dispatch(allUserInfo(accessToken));
    } // eslint-disable-next-line
  }, [accessToken, refreshToken]);

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute redirectTo={'/login'}>Home</PrivateRoute>}
          />
          <Route
            path="report"
            element={<PrivateRoute redirectTo={'/login'}>Report</PrivateRoute>}
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
