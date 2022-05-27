import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsPerPeriod } from './periodDataOperations';

const periodDataSlice = createSlice({
  name: 'periodData',
  initialState: {
    data: {},
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
    },
    [getTransactionsPerPeriod.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default periodDataSlice.reducer;
