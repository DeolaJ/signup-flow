import { FC } from 'react';
import { DeleteButtonContainer } from './delete-button.styled';
import { ButtonProps } from '../../../../types';

const DeleteButton: FC<ButtonProps> = ({
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
    <DeleteButtonContainer
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

export default DeleteButton;
