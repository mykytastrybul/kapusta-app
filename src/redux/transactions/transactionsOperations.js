import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllUserInfo,
  fetchDeleteTransaction,
  fetchExpenseStats,
  fetchExpenseTransaction,
  fetchIncomeStats,
  fetchIncomeTransaction,
  fetchSetBalance,
} from '../../utils/backendApi';
import { errorHandler } from '../error/errorHandler';

export const setBalance = createAsyncThunk(
  'transactions/setBalance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const data = await fetchSetBalance(newBalance);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const incomeTransaction = createAsyncThunk(
  'transactions/incomeTransaction',
  async (transactionObject, { rejectWithValue }) => {
    try {
      const data = await fetchIncomeTransaction(transactionObject);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const expenseTransaction = createAsyncThunk(
  'transactions/expenseTransaction',
  async (transactionObject, { rejectWithValue }) => {
    try {
      const data = await fetchExpenseTransaction(transactionObject);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchDeleteTransaction(id);
      return { id, data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const allUserInfo = createAsyncThunk(
  'transactions/allUserInfo',
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const data = await fetchAllUserInfo(token);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(
          errorHandler({
            error,
            cb: allUserInfo,
          })
        );
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeStats = createAsyncThunk(
  'transactions/getIncomeStats',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchIncomeStats();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseStats = createAsyncThunk(
  'transactions/getExpenseStats',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchExpenseStats();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
