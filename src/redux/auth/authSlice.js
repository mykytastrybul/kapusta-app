import { createSlice } from '@reduxjs/toolkit';
import {
  allUserInfo,
  deleteTransaction,
  expenseTransaction,
  incomeTransaction,
  setBalance,
} from '../transactions/transactionsOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      balance: 0,
      id: null,
    },
    sid: null,
    token: null,
    refreshToken: null,
    loading: false,
    error: null,
  },
  reducers: {
    [setBalance.fulfilled](state, action) {
      state.balance = action.payload;
    },
    [incomeTransaction.fulfilled](state, action) {
      state.balance = action.payload.newBalance;
    },
    [expenseTransaction.fulfilled](state, action) {
      state.balance = action.payload.newBalance;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.balance = action.payload.newBalance;
    },
    [allUserInfo.fulfilled](state, action) {
      state.loading = false;
      state.user.email = action.payload.email;
      state.user.balance = action.payload.balance;
    },
  },
});

export default authSlice.reducer;
