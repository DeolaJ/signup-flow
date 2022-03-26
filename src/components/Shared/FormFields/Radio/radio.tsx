import { FC, ReactNode } from 'react';

import { RadioWrapper } from './radio.styled';

type RadioFieldProps = {
  label: ReactNode | string;
  name: string;
  checked: boolean;
  onChange: (name: string) => void;
  disabled?: boolean;
};

const RadioField: FC<RadioFieldProps> = ({ checked, label, onChange, disabled, name }) => {
  return (
    <RadioWrapper className={`${disabled ? 'disabled' : ''}`} htmlFor={name}>
      <input
        type="radio"
        className={`${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}
        defaultChecked={checked}
        name={name}
        onClick={() => {
          if (disabled) return;
          onChange(name);
        }}
      />
      {label && (
        <button
          onClick={() => {
            if (disabled) return;
            onChange(name);
          }}
          type="button">
          {label}
        </button>
      )}
    </RadioWrapper>
  );
};

export default RadioField;
