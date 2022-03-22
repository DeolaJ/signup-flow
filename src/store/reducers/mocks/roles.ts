import { RoleType } from '../../../types';

export const mockRoles: {
  [key: string]: RoleType;
} = {
  1: {
    id: '1',
    title: 'Role A',
    division: '',
    location: 'NGA',
    yearsOfExperience: 3,
    jobDescription: 'This is a test job description for Role A',
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
  },
  2: {
    id: '2',
    title: 'Role B',
    division: '',
    location: 'US',
    yearsOfExperience: 4,
    jobDescription: 'This is a test job description for Role B',
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
  },
  3: {
    id: '3',
    title: 'Role C',
    division: '',
    location: 'UK',
    yearsOfExperience: 2,
    jobDescription: 'This is a test job description for Role C',
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
  },
  4: {
    id: '4',
    title: 'Role D',
    division: '',
    location: 'CA',
    yearsOfExperience: 3,
    jobDescription: 'This is a test job description for Role D',
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
  },
  5: {
    id: '5',
    title: 'Role E',
    division: '',
    location: 'SF',
    yearsOfExperience: 5,
    jobDescription: 'This is a test job description for Role E',
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
  },
  12345: {
    id: '12345',
    title: 'Role ABCDE',
    division: '',
    location: 'NGA',
    yearsOfExperience: 1,
    jobDescription: 'This is a test job description for Role ABCDE',
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
  },
};
