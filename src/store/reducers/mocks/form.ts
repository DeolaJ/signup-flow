import { FormState } from '../../../types';
import { mockRoles } from './roles';

export const mockForm: FormState = {
  userID: '12345',
  userInfo: {
    id: '12345',
    companyName: 'Test Company',
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
  roles: {
    data: {},
    roleIDs: [],
  },
};

export const mockFormWithRoles: FormState = {
  userID: '12345',
  userInfo: {
    id: '12345',
    companyName: 'Test Company',
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
  roles: {
    data: mockRoles,
    roleIDs: Object.keys(mockRoles),
  },
};
