import { RoleType } from '../../../types';
import reducer, {
  defaultState,
  updateUserInfo,
  addUserRole,
  editUserRole,
  removeUserRole,
  clearUserRoles,
} from '../form';
import { mockForm, mockFormWithRoles } from '../mocks/form';

test('should return the initial state', () => {
  expect(reducer(defaultState, { type: '' })).toEqual(defaultState);
});

describe('Updating User Information', () => {
  test('should handle a user information being updated', () => {
    const modifiedFields = {
      companyName: 'Test Company - new',
      location: 'USA',
      remoteWorkPolicy: '',
      companySize: 130,
      url: 'https://test.com',
      fundingStage: 'Series C',
      admin: {
        name: 'Adeola',
        emailAddress: 'adeola@test.com',
      },
    };
    expect(reducer(mockForm, updateUserInfo({ fields: modifiedFields }))).toEqual({
      ...mockForm,
      userInfo: {
        ...mockForm.userInfo,
        ...modifiedFields,
      },
    });
  });
});

describe('Adding Roles', () => {
  test('should handle a role being added to the state', () => {
    const newRole: RoleType = {
      id: '123456',
      title: 'Role ABCDEF',
      division: '',
      location: 'CO',
      yearsOfExperience: 2,
      jobDescription: 'This is a test job description for Role ABCDEF',
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON(),
    };
    expect(reducer(mockForm, addUserRole({ role: newRole }))).toEqual({
      ...mockForm,
      roles: {
        data: {
          ...mockForm.roles.data,
          [newRole.id]: newRole,
        },
        roleIDs: [...mockForm.roles.roleIDs, newRole.id],
      },
    });
  });
});

describe('Editing existing Roles', () => {
  test('should handle a role being edited', () => {
    const role: RoleType = {
      id: '1',
      title: 'Role A -- C',
      division: '',
      location: 'US',
      yearsOfExperience: 5,
      jobDescription: 'This is a test job description for Role A --- C',
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON(),
    };
    expect(reducer(mockFormWithRoles, editUserRole({ role }))).toEqual({
      ...mockFormWithRoles,
      roles: {
        ...mockFormWithRoles.roles,
        data: {
          ...mockFormWithRoles.roles.data,
          [role.id]: role,
        },
      },
    });
  });
});

describe('Remove existing Roles', () => {
  test('should handle a role being removed', () => {
    expect(reducer(mockFormWithRoles, removeUserRole({ id: '1' }))).toEqual({
      ...mockFormWithRoles,
      roles: {
        data: {
          ...mockFormWithRoles.roles.data,
          1: undefined,
        },
        roleIDs: mockFormWithRoles.roles.roleIDs.filter((roleID) => roleID !== '1'),
      },
    });
  });
});

describe('clear existing Roles', () => {
  test('should handle a role being edited', () => {
    expect(reducer(mockFormWithRoles, clearUserRoles())).toEqual({
      ...mockFormWithRoles,
      roles: {
        data: {},
        roleIDs: [],
      },
    });
  });
});
