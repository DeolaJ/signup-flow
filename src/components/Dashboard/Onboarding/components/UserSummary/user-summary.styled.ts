import styled from 'styled-components';

export const UserSummaryContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  p {
    margin-bottom: 0.5rem;
    border-radius: 0.375rem;
    margin-right: 0.5rem;
    background-color: #ffefec;
    padding: 0.5rem;
    font-size: 0.875rem;
    margin-top: 0;
    color: #461209;
  }

  a {
    color: var(--color-orange);
  }

  a:hover {
    text-decoration: underline;
  }
`;
