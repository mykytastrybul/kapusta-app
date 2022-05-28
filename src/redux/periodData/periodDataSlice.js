import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsPerPeriod } from './periodDataOperations';

const periodDataSlice = createSlice({
  name: 'periodData',
  initialState: {
    data: {},
    expenses: {
      expenseTotal: 0,
      expensesData: {},
    },
    incomes: {
      incomeTotal: 0,
      incomesData: {},
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTransactionsPerPeriod.pending](state) {
      state.loading = true;
    },
    [getTransactionsPerPeriod.fulfilled](state, action) {
      state.loading = false;
      state.data = action.payload;
      if (action.payload) {
        state.expenses.expenseTotal = action.payload.expenses.expenseTotal;
        state.expenses.expensesData = action.payload.expenses.expensesData;
        state.incomes.incomeTotal = action.payload.incomes.incomeTotal;
        state.incomes.incomesData = action.payload.incomes.incomesData;
      }
    },
    [getTransactionsPerPeriod.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default periodDataSlice.reducer;
