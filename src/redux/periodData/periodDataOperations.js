import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactionsPerPeriod } from '../../utils/backendApi';

export const getTransactionsPerPeriod = createAsyncThunk(
  'transactions/getTransactionsPerPeriod',
  async (period, { rejectWithValue }) => {
    try {
      const data = await fetchTransactionsPerPeriod(period);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
