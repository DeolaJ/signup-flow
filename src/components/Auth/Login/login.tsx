import { FC } from 'react';

import LoginForm from '../Shared/LoginForm';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import AuthWrapper from '../auth';

const Login: FC = () => {
  return (
    <ErrorBoundary link="/">
      <AuthWrapper loginState>
        <LoginForm />
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default Login;
