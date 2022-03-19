import { UserState } from '../types';

export const isUserValid = (users: UserState['users'], userID: string) => {
  if (Object.keys(users || {}).includes(userID)) {
    return true;
  }
  return false;
};
