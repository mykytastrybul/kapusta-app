import { createSlice } from '@reduxjs/toolkit';
import {
  allUserInfo,
  deleteTransaction,
  expenseTransaction,
  getExpenseStats,
  getIncomeStats,
  incomeTransaction,
  setBalance,
} from './transactionsOperations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: {
      incomes: [],
      expenses: [],
    },
    monthStats: {
      incomes: [],
      expenses: [],
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [setBalance.pending](state) {
      state.loading = true;
    },
    [setBalance.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [incomeTransaction.pending](state) {
      state.loading = true;
    },
    [incomeTransaction.fulfilled](state, action) {
      state.loading = false;
      state.data.incomes.push(action.payload.transaction);
    },
    [incomeTransaction.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [expenseTransaction.pending](state) {
      state.loading = true;
    },
    [expenseTransaction.fulfilled](state, action) {
      state.loading = false;
      state.data.expenses.push(action.payload.transaction);
    },
    [expenseTransaction.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTransaction.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [deleteTransaction.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTransaction.fulfilled](state, { payload }) {
      state.loading = false;
      state.error = null;
      state.data.incomes = state.data.incomes.filter(el => el._id !== payload);
      state.data.expenses = state.data.expenses.filter(
        el => el._id !== payload
      );
    },
    [allUserInfo.pending](state) {
      state.loading = true;
    },
    [allUserInfo.fulfilled](state, action) {
      state.loading = false;
      // console.log(action.payload);
    },
    [allUserInfo.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [getIncomeStats.pending](state) {
      state.loading = true;
    },
    [getIncomeStats.fulfilled](state, action) {
      state.loading = false;
      state.data.incomes = action.payload.incomes;
      state.monthStats.incomes = action.payload.monthStats;
    },
    [getIncomeStats.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [getExpenseStats.pending](state) {
      state.loading = true;
    },
    [getExpenseStats.fulfilled](state, action) {
      state.loading = false;
      state.data.expenses = action.payload.expenses;
      state.monthStats.expenses = action.payload.monthStats;
    },
    [getExpenseStats.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default transactionsSlice.reducer;
