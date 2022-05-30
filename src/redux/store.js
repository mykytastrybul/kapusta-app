import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth/authSlice';
import transactions from './transactions/transactionsSlice';
import categories from './categories/categoriesSlice';
import reports from './reports/reportsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'sid', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, auth),
    transactions,
    categories,
    reports,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
