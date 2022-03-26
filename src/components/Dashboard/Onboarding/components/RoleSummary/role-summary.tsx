import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { RoleType } from '../../../../../types';

import { RoleSummaryContainer } from './role-summary.styled';

type RoleSummaryProps = {
  activeRole: RoleType;
  verified?: boolean;
};

const RoleSummary: FC<RoleSummaryProps> = ({ activeRole, verified }) => {
  return (
    <RoleSummaryContainer>
      <h3>{activeRole.title}</h3>

      <div className="details-group">
        <p>
          <strong>Salary</strong>: ${activeRole.salary}
        </p>
        <p>
          <strong>Division</strong>: {activeRole.division}
        </p>
        <p>
          <strong>Location</strong>: {activeRole.location}
        </p>
        <p>
          <strong>Experience</strong>: {activeRole.yearsOfExperience} years
        </p>
        {verified && (
          <>
            <p>
              <strong>Created on</strong>: {new Date(activeRole.createdAt).toUTCString()}
            </p>
            <p>
              <strong>Last updated</strong>: {new Date(activeRole.updatedAt).toUTCString()}
            </p>
          </>
        )}
      </div>
      <div className="job-description-details">
        <h4>Job Description</h4>
        <ReactMarkdown>{activeRole.jobDescription}</ReactMarkdown>
      </div>
    </RoleSummaryContainer>
  );
};

export default RoleSummary;
