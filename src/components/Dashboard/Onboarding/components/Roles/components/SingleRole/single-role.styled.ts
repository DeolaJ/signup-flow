import styled from 'styled-components';
import { SpacedListContainer } from '../../../../../../Shared/SpacedList/spaced-list.styled';

export const SingleRoleContainer = styled.div`
  margin-bottom: 3rem;
  max-width: 600px;
`;

export const SingleRoleButtons = styled.div`
  margin-top: 0.75rem;

  ${SpacedListContainer} {
    justify-content: flex-end;
  }
`;
