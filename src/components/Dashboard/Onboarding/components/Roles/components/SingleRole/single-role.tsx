import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RoleType } from '../../../../../../../types';

import RoleSummary from '../../../RoleSummary';
import SingleRoleForm from '../SingleRoleForm';
import BareButton from '../../../../../../Shared/Button/BareButton';

import { removeUserRole } from '../../../../../../../store/reducers/form';

import { SingleRoleButtons, SingleRoleContainer } from './single-role.styled';
import SpacedList from '../../../../../../Shared/SpacedList';

type SingleRoleProps = {
  activeRole: RoleType;
};

const SingleRole: FC<SingleRoleProps> = ({ activeRole }) => {
  const dispatch = useDispatch();
  const [isEditingRole, setIsEditingRole] = useState(false);

  return (
    <SingleRoleContainer>
      {isEditingRole ? (
        <SingleRoleForm activeRole={activeRole} cancelEditing={() => setIsEditingRole(false)} />
      ) : (
        <RoleSummary activeRole={activeRole} />
      )}
      <SingleRoleButtons>
        <SpacedList compact>
          <BareButton
            onClick={() => dispatch(removeUserRole({ id: activeRole.id }))}
            text="Delete"
            color="var(--color-red)"
          />
          {!isEditingRole && (
            <BareButton
              onClick={() => setIsEditingRole(true)}
              text="Edit"
              color="var(--color-blue)"
            />
          )}
        </SpacedList>
      </SingleRoleButtons>
    </SingleRoleContainer>
  );
};

export default SingleRole;
