import { FC } from 'react';
import { InvertedPrimaryButtonContainer } from './inverted-primary-button.styled';
import { ButtonProps } from '../../../../types';

const InvertedPrimaryButton: FC<ButtonProps> = ({
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
    <InvertedPrimaryButtonContainer
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

export default InvertedPrimaryButton;
