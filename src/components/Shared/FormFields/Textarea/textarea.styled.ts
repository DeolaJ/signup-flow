import styled from 'styled-components';

export const TextareaLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--color-black);
  display: block;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;

export const TextareaWrapper = styled.div`
  position: relative;

  textarea {
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 500;
    color: var(--color-black);
    background: transparent;
    padding: 0.875rem 1.125rem;
    width: 100%;
    outline: none;
    border: 0.7px solid var(--color-light-grey);
    border-radius: 0.25rem;

    &::-ms-input-placeholder {
      color: var(--color-placeholder-grey);
      letter-spacing: 0;
    }

    &:focus {
      border-color: transparent;
      outline: 2px solid var(--color-light-grey);
      outline-offset: -2px;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px white inset !important;
    }

    &::placeholder {
      color: var(--color-placeholder-grey);
      letter-spacing: 0;
      opacity: 1;
    }

    &.error {
      border-color: var(--color-red);
    }
  }
`;

export const TextareaError = styled.p`
  color: var(--color-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;
