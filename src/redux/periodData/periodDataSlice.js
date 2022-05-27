import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsPerPeriod } from './periodDataOperations';

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
  reducers: {
    [getTransactionsPerPeriod.pending](state) {
      state.loading = true;
    },
    [getTransactionsPerPeriod.fulfilled](state, action) {
      state.loading = false;
      console.log(action.payload); // хрен знает, что оно выдает, надо тестить
    },
    [getTransactionsPerPeriod.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default periodDataSlice.reducer;
