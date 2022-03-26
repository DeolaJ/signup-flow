import { FC } from 'react';
import DashboardNav from './Shared/DashboardNav';

import { DashboardContainer, DashboardBody } from './dashboard.styled';

const Dashboard: FC = ({ children }) => {
  return (
    <DashboardContainer>
      <DashboardNav />
      <DashboardBody>{children}</DashboardBody>
    </DashboardContainer>
  );
};

export default Dashboard;
