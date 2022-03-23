import { FC } from 'react';
import AuthNav from './Shared/AuthNav';
import { AuthContainer, AuthFormContainer, AuthLeft } from './auth.styled';

type AuthWrapperProps = {
  loginState?: boolean;
  isAuthSwitchHidden?: boolean;
};

const AuthWrapper: FC<AuthWrapperProps> = ({ children, loginState, isAuthSwitchHidden }) => {
  return (
    <AuthContainer>
      <AuthNav loginState={loginState} isAuthSwitchHidden={isAuthSwitchHidden} />
      <AuthLeft>
        <p>{loginState ? 'Welcome Back' : 'Pay a bounty to have great people join your team'}</p>
      </AuthLeft>
      <AuthFormContainer>{children}</AuthFormContainer>
    </AuthContainer>
  );
};

export default AuthWrapper;
