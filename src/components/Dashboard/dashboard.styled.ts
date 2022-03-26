import styled from 'styled-components';

export const DashboardContainer = styled.main`
  min-height: 100vh;
  position: relative;
`;

export const DashboardBody = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 8.5rem 1.75rem 4rem;

  @media (min-width: 768px) {
    padding: 10rem 2rem 4rem;
  }
`;
