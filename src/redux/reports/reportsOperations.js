import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactionsPerPeriod } from '../../utils/backendApi';
import { errorHandler } from '../error/errorHandler';

export const getTransactionsPerPeriod = createAsyncThunk(
  'transactions/getTransactionsPerPeriod',
  async (period, { rejectWithValue, dispatch }) => {
    try {
      const data = await fetchTransactionsPerPeriod(period);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(
          errorHandler({
            error,
            cb: getTransactionsPerPeriod(period),
          })
        );
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
