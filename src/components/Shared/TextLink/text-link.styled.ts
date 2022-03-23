import styled from 'styled-components';
import { CustomStyleProperties } from '../../../types';

export const TextLinkContainer = styled.span<{ style: CustomStyleProperties }>`
  color: var(--color-bare, --color-mid-grey);

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
