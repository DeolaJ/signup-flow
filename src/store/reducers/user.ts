import { createSlice } from '@reduxjs/toolkit';
import { LoggedInUserType, UserState } from '../../types';

export const defaultState: UserState = {
  isLoggedIn: false,
  user: null,
  users: null,
  roles: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    createUser: (state, action) => {
      const {
        userData: { userInfo, roles },
        userID,
      } = action.payload;
      state.users = {
        ...state.users,
        [userID]: userInfo,
      };
      state.roles = {
        ...state.roles,
        [userID]: roles,
      };
      state.isLoggedIn = true;
      const loggedInUser = {
        ...userInfo,
        roles,
      };
      state.user = loggedInUser;
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
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = userSlice;

export const { createUser, modifyUser, loginUser, logoutUser } = userSlice.actions;
export default reducer;
