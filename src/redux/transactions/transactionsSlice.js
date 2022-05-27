import { createSlice } from '@reduxjs/toolkit';

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
});

export default transactionsSlice.reducer;
