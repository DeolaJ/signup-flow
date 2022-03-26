import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { resetForm } from '../reducers/form';
import { loginUser, logoutUser, createUser, modifyUser } from '../reducers/user';

import { isUserValid, scrollToTop } from '../../helpers';
import { LoginDetailsType, StateType, UserType } from '../../types';

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

export function doSubmitNewUser(
  navigate: NavigateFunction
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const toastId = toast.loading('Updating company information...');
    const {
      userInfo,
      roles: { data, roleIDs },
    } = getState().form;
    const { user } = getState().user;

    let modifiedUser = userInfo;
    let userID = userInfo?.id;
    if (!Object.keys(userInfo || {}).length && user) {
      modifiedUser = user;
      userID = user?.id;
    }

    try {
      dispatch(
        modifyUser({
          userData: { userInfo: modifiedUser, roles: roleIDs.map((roleID) => data[roleID]) },
          userID,
        })
      );
      dispatch(resetForm());
      navigate('/dashboard', { replace: true });
      scrollToTop();
      toast.dismiss(toastId);
      toast.success('Successfully updated company information');
    } catch (error) {
      toast.dismiss(toastId);
      toast.error('An error occurred. Please retry');
    }
  };
}
