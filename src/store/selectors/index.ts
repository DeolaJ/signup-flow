import { StateType, UserState } from '../../types';

export const selectUsers = (state: StateType): UserState['users'] => state.user.users;
export const selectUser = (state: StateType): UserState['user'] => state.user.user;
export const selectIsLoggedIn = (state: StateType): UserState['isLoggedIn'] =>
  state.user.isLoggedIn;
