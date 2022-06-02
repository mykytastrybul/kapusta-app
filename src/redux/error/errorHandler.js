import { logoutUser, refreshUser } from '../auth/authOperations';

export const errorHandler =
  ({ error, cb }) =>
  dispatch => {
    if (error.request?.status === 401) {
      dispatch(refreshUser(cb));
    }
    if (error.request?.status === 400) {
      dispatch(logoutUser(cb));
    }
  };
