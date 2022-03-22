//==============================================================================
// State
//==============================================================================

// TODO: Nullify types
export type UserState = {
  user: LoggedInUserType | null;
  roles: { [key: string]: RoleType[] } | null;
  users: { [key: string]: UserType } | null;
  isLoggedIn: boolean;
};

export type FormState = {
  userInfo: UserType;
  roles: {
    data: {
      [key: string]: RoleType;
    };
    roleIDs: Array<string>;
  };
  userID: string;
};

export type ErrorState = {
  error: ErrorType;
};

export type StateType = {
  user: UserState;
  form: FormState;
  error: ErrorState;
};

//==============================================================================
// Major Instances
//==============================================================================

export type UserType = {
  id?: string;
  companyName?: string;
  location?: string;
  remoteWorkPolicy?: string;
  companySize?: string;
  url?: string;
  fundingStage?: string;
  admin?: AdminType;
  createdAt?: string;
  updatedAt?: string;
  verfied?: boolean;
};

export type AdminType = {
  name: string;
  emailAddress: string;
};

export interface LoggedInUserType extends UserType {
  roles?: RoleType[];
}

export type RoleType = {
  id: string;
  title: string;
  division: string;
  location: string;
  yearsOfExperience: number;
  jobDescription: string;
  createdAt: string;
  updatedAt: string;
};

export type ErrorType = {
  hasError: boolean;
  errors: {
    [key: string]: {
      message: string;
    };
  };
  errorFields: string[];
};

//==============================================================================
// Editing Details
//==============================================================================

export type LoginDetailsType = {
  userID: string;
  adminEmail: string;
};
