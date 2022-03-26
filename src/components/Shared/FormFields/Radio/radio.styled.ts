import styled from 'styled-components';

export const RadioWrapper = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.4em;
  align-items: center;

  &.disabled button {
    color: var(--color-orange);
    cursor: auto;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    font-size: inherit;
    box-shadow: none;
    cursor: pointer;
    padding: 0;
    width: max-content;
    text-align: left;
    width: 100%;
    width: fit-content;
    margin-bottom: -3px;
    font-size: 0.875rem;
  }

  input {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: var(--color-orange);
    border: 1px solid var(--color-orange);
    cursor: pointer;
    transform: translateY(0.15em);
    display: grid;
    place-content: center;
    border-radius: 50%;
    width: 14px;
    height: 14px;

    &::before {
      content: '';
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-size: 8px;
      background-repeat: no-repeat;
      background-position: center;
      background-color: var(--color-orange);
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    &.checked::before {
      transform: scale(1);
    }

    &.checked {
      border-color: var(--color-orange);
    }

    &:not(.checked):focus {
      outline: 1px solid var(--color-orange);
      outline-offset: 1px;
    }

    &.disabled {
      cursor: auto;

      &::before {
        background-color: var(--color-orange);
      }
    }
  }
`;
