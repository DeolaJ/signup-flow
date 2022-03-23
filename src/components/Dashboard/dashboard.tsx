import { FC } from 'react';
import DashboardNav from './Shared/DashboardNav';
import { DashboardContainer, DashboardBody } from './dashboard.styled';

const Dashboard: FC = () => {
  return (
    <DashboardContainer>
      <DashboardNav />
      <DashboardBody>You are logged in</DashboardBody>
    </DashboardContainer>
  );
};

export default Dashboard;
