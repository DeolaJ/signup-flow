import { FC } from 'react';
import { InvertedButtonContainer } from './inverted-button.styled';
import { ButtonProps } from '../../../../types';

const InvertedButton: FC<ButtonProps> = ({
  size,
  text,
  className,
  onClick,
  type,
  disabled,
  buttonRef,
  full,
}) => {
  return (
    <InvertedButtonContainer
      size={size}
      className={className}
      text={text}
      onClick={onClick}
      type={type}
      disabled={disabled}
      ref={buttonRef}
      full={full}
    />
  );
};

export default InvertedButton;
