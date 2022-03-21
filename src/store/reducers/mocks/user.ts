import { UserState } from '../../../types';
import { mockRoles } from './roles';

export const mockUser: UserState = {
  isLoggedIn: false,
  user: null,
  users: null,
  roles: null,
};

export const mockUserNotEmpty: UserState = {
  isLoggedIn: false,
  user: null,
  users: {
    123: {
      id: '123',
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
    },
    1234: {
      id: '1234',
      companyName: 'Test Company B',
      location: 'UK',
      remoteWorkPolicy: '',
      companySize: '110',
      url: 'https://test.com',
      fundingStage: 'Series D',
      admin: {
        name: 'Joseph',
        emailAddress: 'joseph@test.com',
      },
    },
    12345: {
      id: '12345',
      companyName: 'Test Company C',
      location: 'CA',
      remoteWorkPolicy: '',
      companySize: '30',
      url: 'https://test.com',
      fundingStage: 'Series B',
      admin: {
        name: 'Joe',
        emailAddress: 'joe@test.com',
      },
    },
  },
  roles: {
    123: Object.values(mockRoles),
    1234: Object.values(mockRoles),
    1235: Object.values(mockRoles),
  },
};

export const mockUserNotEmptyLoggedIn: UserState = {
  isLoggedIn: true,
  user: {
    id: '123',
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
    roles: Object.values(mockRoles),
  },
  users: {
    123: {
      id: '123',
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
    },
    1234: {
      id: '1234',
      companyName: 'Test Company B',
      location: 'UK',
      remoteWorkPolicy: '',
      companySize: '110',
      url: 'https://test.com',
      fundingStage: 'Series D',
      admin: {
        name: 'Joseph',
        emailAddress: 'joseph@test.com',
      },
    },
    12345: {
      id: '12345',
      companyName: 'Test Company C',
      location: 'CA',
      remoteWorkPolicy: '',
      companySize: '30',
      url: 'https://test.com',
      fundingStage: 'Series B',
      admin: {
        name: 'Joe',
        emailAddress: 'joe@test.com',
      },
    },
  },
  roles: {
    123: Object.values(mockRoles),
    1234: Object.values(mockRoles),
    1235: Object.values(mockRoles),
  },
};
