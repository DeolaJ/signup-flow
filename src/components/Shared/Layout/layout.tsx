import { FC, PropsWithChildren } from 'react';
import { LayoutContainer } from './layout.styled';
import GlobalStyles from '../GlobalStyles';

type LayoutProps = {
  className?: string;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, className }) => {
  return (
    <LayoutContainer className={className}>
      <GlobalStyles />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
