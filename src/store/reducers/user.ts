import { createSlice } from '@reduxjs/toolkit';
import { loadUserState, setUserState } from '../../helpers';
import { LoggedInUserType, UserState } from '../../types';

export const defaultState: UserState = {
  isLoggedIn: false,
  user: null,
  users: null,
  roles: null,
};

const persistedUserState = loadUserState();

const userSlice = createSlice({
  name: 'user',
  initialState: persistedUserState || defaultState,
  reducers: {
    createUser: (state, action) => {
      const {
        userData: { userInfo },
        userID,
      } = action.payload;
      state.users = {
        ...state.users,
        [userID]: userInfo,
      };
      state.isLoggedIn = true;
      const loggedInUser = {
        ...userInfo,
      };
      state.user = loggedInUser;
      setUserState(state);
    },
    modifyUser: (state, action) => {
      const {
        userData: { userInfo, roles },
        userID,
      } = action.payload;
      if (state.isLoggedIn) {
        state.user = {
          ...userInfo,
          roles,
        };
        state.users = {
          ...state.users,
          [userID]: userInfo,
        };
        state.roles = {
          ...state.roles,
          [userID]: roles,
        };
      }
      setUserState(state);
    },
    loginUser: (state, action) => {
      const { userID, adminEmail } = action.payload;
      const user = state.users?.[userID] || null;
      if (user?.admin?.emailAddress === adminEmail) {
        state.isLoggedIn = true;
        const loggedInUser: LoggedInUserType = {
          ...user,
          roles: state.roles?.[userID],
        };
        state.user = loggedInUser;
      }
      setUserState(state);
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      setUserState(state);
    },
  },
});

const { reducer } = userSlice;

export const { createUser, modifyUser, loginUser, logoutUser } = userSlice.actions;
export default reducer;
