import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState, RoleType } from '../../types';

const defaultState: FormState = {
  userID: '',
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
      const { fields } = action.payload;
      state.userInfo = {
        ...state.userInfo,
        ...fields,
      };
    },
    addUserRole: (state, action: PayloadAction<{ role: RoleType }>) => {
      const { role } = action.payload;
      state.roles.data[role.id] = role;
      state.roles.roleIDs.push(role.id);
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
  },
});

const { reducer } = formSlice;

export const { updateUserInfo, addUserRole, editUserRole, removeUserRole, clearUserRoles } =
  formSlice.actions;
export default reducer;
