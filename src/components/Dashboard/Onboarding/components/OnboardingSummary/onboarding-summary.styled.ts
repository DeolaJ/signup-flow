import styled from 'styled-components';

export const OnboardingSummaryContainer = styled.section`
  > h2 {
    color: var(--color-purple);
    margin-bottom: 1.875rem;
    font-size: 1.625rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #dbe4f5;
    line-height: 2rem;
  }

  > h3 {
    color: var(--color-black);
    background-color: var(--color-divider);
    padding: 1rem;
    font-size: 1.25rem;
    margin-top: 2rem;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    > h2 {
      margin-bottom: 2.25rem;
      font-size: 2rem;
      padding-bottom: 1rem;
      line-height: 2.25rem;
    }
  }
`;
