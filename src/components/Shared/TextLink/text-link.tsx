import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { TextLinkContainer } from './text-link.styled';

type TextLinkProps = {
  link: string;
  color?: string;
  text: ReactNode | string;
};

const TextLink: FC<TextLinkProps> = ({ link, color, text }) => {
  return (
    <TextLinkContainer style={{ '--color-bare': color }}>
      <Link to={link}>{text}</Link>
    </TextLinkContainer>
  );
};

export default TextLink;
