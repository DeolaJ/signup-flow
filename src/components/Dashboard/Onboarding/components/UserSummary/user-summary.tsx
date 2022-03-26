import { FC } from 'react';
import { UserType } from '../../../../../types';

import { UserSummaryContainer } from './user-summary.styled';

type UserSummaryProps = {
  activeUser: UserType | null;
  verified?: boolean;
};

const UserSummary: FC<UserSummaryProps> = ({ activeUser, verified }) => {
  return (
    <UserSummaryContainer>
      {!verified && (
        <>
          <p>
            <strong>ID/Username</strong>: {activeUser?.id}
          </p>
          <p>
            <strong>Company Name</strong>: {activeUser?.companyName}
          </p>
        </>
      )}
      <p>
        <strong>Location</strong>: {activeUser?.location}
      </p>
      <p>
        <strong>Remote Work Policy</strong>: {activeUser?.remoteWorkPolicy}
      </p>
      <p>
        <strong>Size</strong>: {activeUser?.companySize}
      </p>
      <p>
        <a href={activeUser?.url} target="_blank" rel="noopener noreferrer">
          {activeUser?.url}
        </a>
      </p>
      <p>
        <strong>Funding Stage</strong>: {activeUser?.fundingStage}
      </p>
      {!verified && (
        <>
          <p>
            <strong>Admin Name</strong>: {activeUser?.admin?.name || 'N/A'}
          </p>
          <p>
            <strong>Admin Email</strong>: {activeUser?.admin?.emailAddress || 'N/A'}
          </p>
        </>
      )}
      {verified && (
        <>
          <p>
            <strong>Created on</strong>:{' '}
            {activeUser?.createdAt ? new Date(activeUser?.createdAt).toUTCString() : 'N/A'}
          </p>
          <p>
            <strong>Last updated</strong>:{' '}
            {activeUser?.updatedAt ? new Date(activeUser?.updatedAt).toUTCString() : 'N/A'}
          </p>
        </>
      )}
    </UserSummaryContainer>
  );
};

export default UserSummary;
