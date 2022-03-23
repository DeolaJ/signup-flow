import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../store/selectors';

type PublicRouteProps = {
  children: ReactElement;
};

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate replace to="/dashboard" />;
  }

  return children;
};

export default PublicRoute;
