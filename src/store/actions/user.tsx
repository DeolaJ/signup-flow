import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { isUserValid } from '../../helpers';
import { LoginDetailsType, StateType, UserType } from '../../types';
import { loginUser, logoutUser, createUser } from '../reducers/user';

export function doSignupUser(
  userInfo: UserType,
  userID: string
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const toastId = toast.loading('Creating account');

    const { users } = getState().user;

    const validUser = isUserValid(users, userID);
    if (validUser) {
      toast.dismiss(toastId);
      toast.error('User already exists, please sign in');
      return;
    }

    try {
      dispatch(createUser({ userData: { userInfo }, userID }));
      toast.dismiss(toastId);
      toast.success('Account Created');
    } catch (error) {
      toast.dismiss(toastId);
      toast.error('An error occurred. Please retry');
    }
  };
}

export function doLoginUser(
  loginDetails: LoginDetailsType
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const toastId = toast.loading('Logging in...');

    const { userID, adminEmail } = loginDetails;
    const { users } = getState().user;

    const validUser = isUserValid(users, userID);
    if (!validUser) {
      toast.dismiss(toastId);
      toast.error('Invalid ID/Admin Email. Please retry');
      return;
    }

    try {
      dispatch(loginUser({ userID, adminEmail }));
      toast.dismiss(toastId);
      toast.success('Successfully logged in');
    } catch (error) {
      toast.dismiss(toastId);
      toast.error('An error occurred. Please retry');
    }
  };
}

export function doLogoutUser(): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.loading('Logging out...');

    try {
      dispatch(logoutUser());
      toast.dismiss(toastId);
      toast.success('Successfully logged out');
    } catch (error) {
      toast.dismiss(toastId);
      toast.error('An error occurred. Please retry');
    }
  };
}
