import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthSwitchContainer, AuthSwitchButton } from './auth-switch.styled';

type AuthSwitchProps = {
  loginState?: boolean;
};

const AuthSwitch: FC<AuthSwitchProps> = ({ loginState }) => {
  return (
    <AuthSwitchContainer className="auth-switch">
      {loginState ? (
        <>
          {`Don't have a company account? `}
          <Link to="/signup">
            <AuthSwitchButton>Sign Up</AuthSwitchButton>
          </Link>
        </>
      ) : (
        <>
          {`Already have a company account? `}
          <Link to="/">
            <AuthSwitchButton>Sign In</AuthSwitchButton>
          </Link>
        </>
      )}
    </AuthSwitchContainer>
  );
};

export default AuthSwitch;
