import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchExpenseCats, fetchIncomeCats } from '../../utils/backendApi';

export const getIncomeCats = createAsyncThunk(
  'categories/getIncomeCats',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchIncomeCats();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseCats = createAsyncThunk(
  'categories/getExpenseCats',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchExpenseCats();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
