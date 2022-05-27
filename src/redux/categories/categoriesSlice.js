import { createSlice } from '@reduxjs/toolkit';
import { getExpenseCats, getIncomeCats } from './categoriesOperations';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: {
      incomes: [],
      expenses: [],
    },
    loading: false,
    error: null,
  },
  reducers: {
    [getIncomeCats.pending](state) {
      state.loading = true;
    },
    [getIncomeCats.fulfilled](state, action) {
      state.loading = false;
      state.data.incomes = action.payload;
    },
    [getIncomeCats.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [getExpenseCats.pending](state) {
      state.loading = true;
    },
    [getExpenseCats.fulfilled](state, action) {
      state.loading = false;
      state.data.expenses = action.payload;
    },
    [getExpenseCats.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
