import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserRoles } from '../../../../../store/reducers/form';

import { selectUserRoles } from '../../../../../store/selectors';
import DeleteButton from '../../../../Shared/Button/DeleteButton';
import SingleRole from './components/SingleRole';
import SingleRoleForm from './components/SingleRoleForm';

import { RolesContainer } from './roles.styled';

const Roles: FC = () => {
  const dispatch = useDispatch();
  const userRoles = useSelector(selectUserRoles);
  const hasRoles = userRoles?.roleIDs.length > 0;

  return (
    <RolesContainer>
      <h2>Fill in the available roles</h2>

      {userRoles?.roleIDs?.map((roleID) => (
        <React.Fragment key={roleID}>
          <SingleRole activeRole={userRoles?.data[roleID]} />
        </React.Fragment>
      ))}

      {hasRoles && (
        <div className="clear-all-button">
          <DeleteButton
            text="Clear All Roles"
            className="clear-all-button"
            onClick={() => dispatch(clearUserRoles())}
            size="sm"
          />
        </div>
      )}

      <h3 id="add-role-form-title">Add {hasRoles ? 'to' : 'new'} job openings</h3>

      <SingleRoleForm />
    </RolesContainer>
  );
};

export default Roles;
