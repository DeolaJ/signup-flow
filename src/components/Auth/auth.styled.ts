import styled from 'styled-components';

export const AuthContainer = styled.main`
  min-height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const AuthFormContainer = styled.section`
  background: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8.5rem 1.875rem;

  @media (min-width: 768px) {
    padding: 10rem 2rem;
  }
`;

export const AuthLeft = styled.div`
  height: 100%;
  background-color: var(--color-purple);
  width: 100%;
  position: relative;
  display: none;

  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
    color: white;
    margin: auto;
    letter-spacing: -1.5px;
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 2.5rem 3.5rem;
  }
`;
