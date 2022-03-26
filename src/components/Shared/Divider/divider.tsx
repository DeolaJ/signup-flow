import { FC } from 'react';
import { DividerContainer } from './divider.styled';

type DividerProps = {
  text?: string;
};

const Divider: FC<DividerProps> = ({ text }) => {
  return <DividerContainer>{text}</DividerContainer>;
};

export default Divider;
