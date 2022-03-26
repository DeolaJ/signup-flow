import { UserState } from '../types';
import { localStorageAvailable } from '../utils';

const isLocalStorageAvailable = localStorageAvailable() || false;

export const isUserValid = (users: UserState['users'], userID: string) => {
  if (Object.keys(users || {}).includes(userID)) {
    return true;
  }
  return false;
};

export function setUserState(user: UserState): void {
  if (!isLocalStorageAvailable) return;
  localStorage.setItem(
    'userState',
    JSON.stringify({
      ...user,
    })
  );
}

export function loadUserState(): UserState | null {
  if (!isLocalStorageAvailable) return null;
  try {
    const serializedState = localStorage.getItem('userState');
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
}

export const scrollToLastRole = (): void => {
  return document.getElementById('add-role-form-title')?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

export const scrollToTop = (): void => {
  return document.body?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
