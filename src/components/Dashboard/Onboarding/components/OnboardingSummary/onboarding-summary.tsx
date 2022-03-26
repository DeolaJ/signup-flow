import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectModifiedUser, selectUser, selectUserRoles } from '../../../../../store/selectors';
import RoleSummary from '../RoleSummary';
import UserSummary from '../UserSummary';

import { OnboardingSummaryContainer } from './onboarding-summary.styled';

const OnboardingSummary: FC = () => {
  const modifiedUser = useSelector(selectModifiedUser);
  const loggedInUser = useSelector(selectUser);
  const modifiedRoles = useSelector(selectUserRoles);

  const activeUserDetails = modifiedUser || loggedInUser;

  return (
    <OnboardingSummaryContainer>
      <h2>Review the information below before submitting</h2>

      <h3>Company Information</h3>

      <UserSummary activeUser={activeUserDetails} />

      <br />
      <h3>Company Open Roles</h3>

      {modifiedRoles?.roleIDs?.map((roleID) => (
        <React.Fragment key={roleID}>
          <RoleSummary activeRole={modifiedRoles?.data[roleID]} />
        </React.Fragment>
      ))}
    </OnboardingSummaryContainer>
  );
};

export default OnboardingSummary;
