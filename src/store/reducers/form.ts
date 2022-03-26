import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { scrollToLastRole } from '../../helpers';
import { FormState, RoleType } from '../../types';

export const defaultState: FormState = {
  userInfo: {},
  roles: {
    data: {},
    roleIDs: [], // To order the roles
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState: defaultState,
  reducers: {
    updateUserInfo: (state, action) => {
      const { userDetails } = action.payload;
      state.userInfo = userDetails;
    },
    addUserRole: (state, action: PayloadAction<{ role: RoleType }>) => {
      const { role } = action.payload;
      state.roles.data[role.id] = role;
      state.roles.roleIDs.push(role.id);
      scrollToLastRole();
    },
    editUserRole: (state, action) => {
      const { role } = action.payload;
      state.roles.data[role.id] = role;
    },
    removeUserRole: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      delete state.roles.data?.[id];
      state.roles.roleIDs = state.roles.roleIDs.filter((roleID) => roleID !== id);
    },
    clearUserRoles: (state) => {
      state.roles = {
        data: {},
        roleIDs: [],
      };
    },
    resetForm: (state) => {
      state.userInfo = {};
      state.roles = {
        data: {},
        roleIDs: [],
      };
    },
  },
});

const { reducer } = formSlice;

export const {
  updateUserInfo,
  addUserRole,
  editUserRole,
  removeUserRole,
  clearUserRoles,
  resetForm,
} = formSlice.actions;
export default reducer;
