import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 540px;
  width: 100%;
  margin: 0 auto;

  &.role-form {
    margin: 0;
    max-width: 600px;
    padding: 0.5rem 1.5rem 2rem;
    border-radius: 0.5rem;
    border: 2px solid var(--color-divider);
  }

  > h2,
  > p {
    margin: 0;
  }

  h2 {
    text-align: center;
    color: var(--color-purple);
    margin-bottom: 2rem;
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: -0.025em;
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-black);
    margin-bottom: 0;
    text-align: center;
  }

  > button {
    margin-top: 3.125rem;
    text-align: center;
    width: 100%;
  }

  .signup-button {
    margin-top: 2rem;
  }

  .fp-button {
    margin: 1.25rem auto 0;
    width: auto;
    height: auto;
  }

  .edit-company-information {
    color: var(--color-purple);
    margin-bottom: 1.875rem;
    font-size: 1.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #dbe4f5;
    line-height: 2.25rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      text-align: left;
      margin-bottom: 3.25rem;
    }

    > p {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      text-align: left;
    }

    .edit-company-information {
      margin-bottom: 2.25rem;
      font-size: 2rem;
      padding-bottom: 1rem;
    }
  }
`;

export const InputContainer = styled.div`
  + div,
  &.mt-6 {
    margin-top: 1.5rem;
  }

  &.mt-0 {
    margin-top: 0;
  }

  .job-description-type__label {
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: var(--color-black);
    display: block;
    font-weight: 500;
    margin-bottom: 0.625rem;
  }

  @media (min-width: 768px) {
    + div,
    &.mt-6 {
      margin-top: 1.25rem;
    }
  }
`;
