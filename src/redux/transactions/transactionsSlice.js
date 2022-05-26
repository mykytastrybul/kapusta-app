import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: {
      incomes: [],
      expenses: [],
      monthStats: [],
      periodData: [],
    },
    loading: false,
    error: null,
  },
  reducers: {},
});

export default transactionsSlice.reducer;
