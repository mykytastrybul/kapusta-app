import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: {
      incomes: [],
      expenses: [],
    },
    loading: false,
    error: null,
  },
  reducers: {},
});

export default categoriesSlice.reducer;
