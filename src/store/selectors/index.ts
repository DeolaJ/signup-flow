import { FormState, StateType, UserState } from '../../types';

// User Selectors
export const selectUsers = (state: StateType): UserState['users'] => state.user.users;
export const selectUser = (state: StateType): UserState['user'] => state.user.user;
export const selectIsLoggedIn = (state: StateType): UserState['isLoggedIn'] =>
  state.user.isLoggedIn;

// Form selectors
export const selectUserRoles = (state: StateType): FormState['roles'] => state.form.roles;
export const selectModifiedUser = (state: StateType): FormState['userInfo'] | null =>
  Object.keys(state.form.userInfo || {}).length > 0 ? state.form.userInfo : null;
