import styled from 'styled-components';
import { SpacedListContainer } from '../../../../Shared/SpacedList/spaced-list.styled';

export const PaginationContainer = styled.div`
  margin-top: 5rem;

  ${SpacedListContainer} {
    justify-content: flex-end;

    > * + * {
      margin-left: 2rem;
    }
  }
`;
