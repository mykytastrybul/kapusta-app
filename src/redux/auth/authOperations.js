import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchLoginUser,
  fetchLogoutUser,
  fetchRefreshUser,
  fetchRegisterUser,
} from '../../utils/backendApi';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (newUser, thunkApi) => {
    try {
      return await fetchRegisterUser(newUser);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkApi) => {
    try {
      return await fetchLoginUser(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkApi) => {
    try {
      return await fetchLogoutUser();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const sid = thunkApi.getState().auth.sid;
    try {
      return await fetchRefreshUser(sid);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
