import styled from 'styled-components';

export const CompanyDetailsContainer = styled.section`
  padding: 0 1.5rem;

  > h2 {
    color: var(--color-purple);
    margin-bottom: 1.25rem;
    font-size: 1.75rem;
    line-height: 2.25rem;
  }

  > h3 {
    color: var(--color-black);
    font-size: 1.25rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      text-align: left;
      margin-bottom: 1.5rem;
    }
  }
`;
