import { createSlice } from '@reduxjs/toolkit';
import { LoggedInUserType, UserState } from '../../types';

const defaultState: UserState = {
  isLoggedIn: false,
  user: null,
  users: null,
  roles: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    // checkUser: (state, action: PayloadAction<{ userID: string }>): boolean => {
    //   const { userID } = action.payload;
    //   return Boolean(state.users?.[userID]);
    // },
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
      state.users = {
        ...state.users,
        [userID]: userInfo,
      };
      state.roles = {
        ...state.roles,
        [userID]: roles,
      };
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
      state.isLoggedIn = true;
      state.user = null;
    },
  },
});

const { reducer } = userSlice;

export const { createUser, modifyUser, loginUser, logoutUser } = userSlice.actions;
export default reducer;
