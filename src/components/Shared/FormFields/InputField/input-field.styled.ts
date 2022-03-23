import styled from 'styled-components';

export const InputLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--color-black);
  display: block;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;

export const InputWrapper = styled.div`
  position: relative;

  input {
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 500;
    color: var(--color-black);
    background: transparent;
    padding: 0.875rem 1.125rem;
    width: 100%;
    outline: none;
    border: 0.7px solid var(--color-mid-grey);
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
      color: var(--color-light-grey);
      letter-spacing: 0;
      opacity: 1;
    }

    &.error {
      border-color: var(--color-red);
    }
  }

  .placeholder {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    text-align: left;
    margin: 0;
    width: 100%;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--color-black);
    background: white;
    padding: 1rem 1.5rem;
    outline: none;
    border: 0.7px solid var(--color-mid-grey);
    border-radius: 0.25rem;
    z-index: 1;
  }

  .placeholder-button {
    position: absolute;
    margin: 0;
    top: 50%;
    width: auto;
    left: calc(100% - 2.25rem);
    transform: translateY(-50%);
    cursor: pointer;
    right: 0;
    border: none;
    background: transparent;
    box-shadow: none;

    svg {
      width: 1.125rem;
    }
  }

  svg path {
    fill: var(--color-mid-grey);
  }
`;

export const InputFieldError = styled.p`
  color: var(--color-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;
