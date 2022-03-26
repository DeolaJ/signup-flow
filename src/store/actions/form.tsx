import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StateType, UserType } from '../../types';
import { updateUserInfo } from '../reducers/form';

export function doUpdateUserInfo(
  userDetails: UserType
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(updateUserInfo({ userDetails }));
  };
}
