import { FC } from 'react';

import SignupForm from '../Shared/SignupForm';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import AuthWrapper from '../auth';

const Signup: FC = () => {
  return (
    <ErrorBoundary link="/">
      <AuthWrapper>
        <SignupForm />
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default Signup;
