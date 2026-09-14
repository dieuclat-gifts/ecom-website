import { setUserLoading, setUserSuccess, setUserFailure, logoutUser } from '../slices/user.slice';

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(setUserLoading());
    // TODO: Replace with actual API request once backend auth is connected
    const mockUser = { id: 1, name: 'Demo User', email: credentials?.email || 'user@example.com' };
    dispatch(setUserSuccess(mockUser));
  } catch (error) {
    dispatch(setUserFailure(error.message || 'Login failed'));
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutUser());
};