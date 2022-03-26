import styled from 'styled-components';

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
  color: var(--color-light-grey);
  font-size: 0.75rem;
  margin: 1.875rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 47%;
    transform: translateY(-50%);
    left: 0;
    height: 1px;
    background-color: var(--color-light-grey);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 46%;
    transform: translateY(-50%);
    right: 0;
    height: 1px;
    background-color: var(--color-light-grey);
  }
`;
