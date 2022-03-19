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
    const toastId = toast.success('Creating account', {
      autoClose: false,
    });

    const { users } = getState().user;

    const validUser = isUserValid(users, userID);
    if (!validUser) {
      toast.update(toastId, {
        render: 'User already exists, please sign in',
        type: toast.TYPE.ERROR,
        autoClose: 2500,
      });
    }
    try {
      dispatch(createUser({ userInfo, userID }));
      toast.update(toastId, {
        render: 'Account Created',
        type: toast.TYPE.SUCCESS,
        autoClose: 2500,
      });
    } catch (error) {
      toast.update(toastId, {
        render: 'An error occurred. Please retry',
        type: toast.TYPE.ERROR,
        autoClose: 2500,
      });
    }
  };
}

export function doLoginUser(
  loginDetails: LoginDetailsType
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const toastId = toast.success('Logging in...', {
      autoClose: false,
    });

    const { userID, adminEmail } = loginDetails;
    const { users } = getState().user;

    const validUser = isUserValid(users, userID);
    if (!validUser) {
      toast.update(toastId, {
        render: 'Invalid ID/Admin Email. Please try again',
        type: toast.TYPE.ERROR,
        autoClose: 2500,
      });
    }

    try {
      dispatch(loginUser({ userID, adminEmail }));
      toast.update(toastId, {
        render: 'Successfully logged in',
        type: toast.TYPE.SUCCESS,
        autoClose: 2500,
      });
    } catch (error) {
      toast.update(toastId, {
        render: 'An error occurred. Please retry',
        type: toast.TYPE.ERROR,
        autoClose: 2500,
      });
    }
  };
}

export function doLogoutUser(): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Logging out...', {
      autoClose: false,
    });

    try {
      dispatch(logoutUser());
      toast.update(toastId, {
        render: 'Successfully logged out',
        type: toast.TYPE.SUCCESS,
        autoClose: 2500,
      });
    } catch (error) {
      toast.update(toastId, {
        render: 'An error occurred. Please retry',
        type: toast.TYPE.ERROR,
        autoClose: 2500,
      });
    }
  };
}
