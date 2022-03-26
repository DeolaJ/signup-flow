import styled from 'styled-components';

export const RoleSummaryContainer = styled.section`
  border: 1px solid var(--color-light-blue);
  padding: 1.5rem;

  > h3 {
    color: var(--color-purple);
    font-size: 1.5rem;
    margin-top: 0;
  }

  + section {
    margin-top: 2.5rem;
  }

  .job-description-details {
    > h4 {
      color: var(--color-purple);
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-light-blue);
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }
  }

  .details-group {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    > p {
      background-color: var(--color-light-blue);
      padding: 0.5rem;
      font-size: 0.875rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
      border-radius: 0.375rem;
      margin-right: 0.5rem;
    }
  }
`;
