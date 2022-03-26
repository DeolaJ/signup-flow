import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Dashboard from '../dashboard';
import CompanyDetails from './components/CompanyDetails';
import { selectUser } from '../../../store/selectors';

const Home: FC = () => {
  const loggedInUser = useSelector(selectUser);

  if (!loggedInUser?.verified) {
    return <Navigate replace to="/dashboard/onboarding" />;
  }

  return (
    <Dashboard>
      <CompanyDetails />
    </Dashboard>
  );
};

export default Home;
