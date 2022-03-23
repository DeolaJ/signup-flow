import { FC } from 'react';
import AuthSwitch from '../AuthSwitch';

import { AuthNavContainer } from './auth-nav.styled';

type AuthNavProps = {
  loginState?: boolean;
  isAuthSwitchHidden?: boolean;
};

const AuthNav: FC<AuthNavProps> = ({ loginState, isAuthSwitchHidden }) => {
  return (
    <AuthNavContainer>
      {!isAuthSwitchHidden && <AuthSwitch loginState={loginState} />}
    </AuthNavContainer>
  );
};

export default AuthNav;
