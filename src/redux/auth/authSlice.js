import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperations';

const initialState = {
  user: {
    email: '',
    balance: 0,
    id: '',
    transactions: [],
  },
  sid: '',
  token: '',
  refreshToken: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    //register
    [registerUser.fulfilled]: (state, { payload }) => ({
      ...state,
      user: { ...payload },
      loading: false,
      error: null,
    }),
    //login
    [loginUser.fulfilled]: (state, { payload }) => ({
      ...state,
      user: { ...payload.userData },
      token: payload.accessToken,
      refreshToken: payload.refreshToken,
      sid: payload.sid,
      loading: false,
      error: null,
    }),
    //logout
    [logoutUser.fulfilled]: () => ({
      ...initialState,
    }),
    //refresh
    [refreshUser.fulfilled]: (state, { payload }) => ({
      ...state,
      token: payload.newAccessToken,
      refreshToken: payload.newRefreshToken,
      sid: payload.newSid,
      loading: false,
      error: null,
    }),
    //pendings/rejects
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
