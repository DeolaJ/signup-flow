import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../store/selectors';

type PrivateRouteProps = {
  children: ReactElement;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return children;
};

export default PrivateRoute;
