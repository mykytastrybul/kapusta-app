import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';

const CostsAndIncomesPage = lazy(() =>
  import('../pages/CostsAndIncomesPage/CostsAndIncomesPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const HomePage = lazy(() => import('../pages/CostsAndIncomesPage'));
const ReportPage = lazy(() => import('../pages/ReportPage'));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route
            path="/home"
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
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
