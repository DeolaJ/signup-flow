import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../store/selectors';
import RoleSummary from '../../../Onboarding/components/RoleSummary';
import UserSummary from '../../../Onboarding/components/UserSummary';

import { CompanyDetailsContainer } from './company-details.styled';

const CompanyDetails: FC = () => {
  const loggedInUser = useSelector(selectUser);

  return (
    <CompanyDetailsContainer>
      <h2>Hello, {loggedInUser?.companyName}</h2>

      <UserSummary activeUser={loggedInUser} verified />

      <h3>Open Roles</h3>

      {loggedInUser?.roles?.map((role) => (
        <React.Fragment key={role.id}>
          <RoleSummary activeRole={role} verified />
        </React.Fragment>
      ))}
    </CompanyDetailsContainer>
  );
};

export default CompanyDetails;
