import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.main<{ className?: string }>`
  height: 100vh;
  width: 100%;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;

  p {
    margin-right: 0.5rem;
  }
`;
