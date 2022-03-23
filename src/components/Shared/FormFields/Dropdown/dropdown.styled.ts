import styled from 'styled-components';

export const DropdownLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--color-black);
  display: block;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;

export const DropdownWrapper = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1rem;
  width: 100%;
  color: var(--color-black);

  > div > div:first-of-type {
    padding: 0.625rem 1.125rem;
    border: 0.7px solid var(--color-mid-grey);
    border-radius: 5px;
    background: transparent;

    > div {
      padding: 0;
      font-size: 0.875rem;
    }

    > div > span {
      display: none;
    }

    > div > div {
      padding: 0;
    }

    div[class$='placeholder'] {
      color: var(--color-light-grey);
    }

    &:hover {
      box-shadow: 0 0 0 1px var(--color-light-grey);
    }
  }

  &.error {
    border-color: var(--color-red);
  }
`;

export const DropdownFieldError = styled.p`
  color: var(--color-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;
