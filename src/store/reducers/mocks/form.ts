import { FormState } from '../../../types';
import { mockRoles } from './roles';

export const mockForm: FormState = {
  userInfo: {
    id: '12345',
    companyName: 'Test Company',
    location: 'US',
    remoteWorkPolicy: '',
    companySize: 100,
    url: 'https://test.com',
    fundingStage: 'Series A',
    admin: {
      name: 'Adeola',
      emailAddress: 'adeola@test.com',
    },
    verified: false,
  },
  roles: {
    data: {},
    roleIDs: [],
  },
};

export const mockFormWithRoles: FormState = {
  userInfo: {
    id: '12345',
    companyName: 'Test Company',
    location: 'US',
    remoteWorkPolicy: '',
    companySize: 100,
    url: 'https://test.com',
    fundingStage: 'Series A',
    admin: {
      name: 'Adeola',
      emailAddress: 'adeola@test.com',
    },
    verified: true,
  },
  roles: {
    data: mockRoles,
    roleIDs: Object.keys(mockRoles),
  },
};
