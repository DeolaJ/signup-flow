import { FC } from 'react';
import Logo from '../Logo';
import SpacedList from '../SpacedList';

import { NavContainer } from './nav.styled';

type NavProps = {
  className?: string;
};

const Nav: FC<NavProps> = ({ className, children }) => {
  return (
    <NavContainer className={className}>
      <SpacedList>
        <Logo />
        {children}
      </SpacedList>
    </NavContainer>
  );
};

export default Nav;
