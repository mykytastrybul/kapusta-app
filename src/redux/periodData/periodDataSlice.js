import { createSlice } from '@reduxjs/toolkit';

const periodDataSlice = createSlice({
  name: 'periodData',
  initialState: {
    incomes: {
      total: 0,
      incomesData: null,
    },
    expenses: {
      total: 0,
      incomesData: null,
    },
    loading: false,
    error: null,
  },
  reducers: {},
});

export default periodDataSlice.reducer;
