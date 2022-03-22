import { RoleType, UserType } from '../../../types';
import reducer, { defaultState, createUser, modifyUser, loginUser, logoutUser } from '../user';
import { mockRoles } from '../mocks/roles';
import { mockUser, mockUserNotEmpty, mockUserNotEmptyLoggedIn } from '../mocks/user';

test('should return the initial state', () => {
  expect(reducer(defaultState, { type: '' })).toEqual(defaultState);
});

describe('Creating User', () => {
  test('should handle a user information being created', () => {
    const newUser: UserType = {
      id: '1',
      companyName: 'Test Company A',
      location: 'US',
      remoteWorkPolicy: '',
      companySize: '100',
      url: 'https://test.com',
      fundingStage: 'Series A',
      admin: {
        name: 'Adeola',
        emailAddress: 'adeola@test.com',
      },
      createdAt: Date.now.toString(),
      updatedAt: Date.now.toString(),
      verfied: true,
    };
    const newUserRoles: RoleType[] = Object.values(mockRoles);
    const newUserData = {
      userInfo: newUser,
      roles: newUserRoles,
    };
    expect(reducer(mockUser, createUser({ userData: newUserData, userID: 1 }))).toEqual({
      ...mockUser,
      isLoggedIn: true,
      users: {
        ...mockUser.users,
        1: newUser,
      },
      roles: {
        ...mockUser.roles,
        1: newUserRoles,
      },
      user: {
        ...newUser,
        roles: newUserRoles,
      },
    });
  });
});

describe('Updating User', () => {
  test('should handle a user information being updated', () => {
    const updatedUser: UserType = {
      id: '123',
      companyName: 'Test Company A --- C',
      location: 'USA',
      remoteWorkPolicy: '',
      companySize: '120',
      url: 'https://test.com',
      fundingStage: 'Series B',
      admin: {
        name: 'Adeola',
        emailAddress: 'adeola@test.com',
      },
      createdAt: Date.now.toString(),
      updatedAt: Date.now.toString(),
      verfied: true,
    };
    const updatedUserRoles: RoleType[] = Object.values(mockRoles);
    const updatedUserData = {
      userInfo: updatedUser,
      roles: updatedUserRoles,
    };
    expect(
      reducer(mockUserNotEmptyLoggedIn, modifyUser({ userData: updatedUserData, userID: '123' }))
    ).toEqual({
      ...mockUserNotEmptyLoggedIn,
      users: {
        ...mockUserNotEmptyLoggedIn.users,
        123: updatedUser,
      },
      roles: {
        ...mockUserNotEmptyLoggedIn.roles,
        123: updatedUserRoles,
      },
      user: {
        ...updatedUser,
        roles: updatedUserRoles,
      },
    });
  });
});

describe('Log in User', () => {
  test('should handle a user logging in', () => {
    expect(
      reducer(mockUserNotEmpty, loginUser({ userID: '123', adminEmail: 'adeola@test.com' }))
    ).toEqual({
      ...mockUserNotEmpty,
      isLoggedIn: true,
      user: {
        ...mockUserNotEmpty?.users?.['123'],
        roles: mockUserNotEmpty?.roles?.['123'],
      },
    });
  });
});

describe('Log out User', () => {
  test('should handle a user logging out', () => {
    expect(reducer(mockUserNotEmptyLoggedIn, logoutUser())).toEqual({
      ...mockUserNotEmptyLoggedIn,
      isLoggedIn: false,
      user: null,
    });
  });
});
