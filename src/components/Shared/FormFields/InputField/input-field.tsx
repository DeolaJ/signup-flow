import { FC } from 'react';
import { useFormikContext } from 'formik';

import { InputLabel, InputWrapper, InputFieldError } from './input-field.styled';
import { cleanInput } from '../../../../utils';

type InputFieldProps = {
  label: string;
  placeholder: string;
  name: string;
  type: 'email' | 'number' | 'text' | 'numeric';
  value: string | number;
  error: boolean;
  errorMessage?: string;
  disabled?: boolean;
  full?: boolean;
};

const InputField: FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
  type,
  value,
  error,
  disabled,
  errorMessage,
  full,
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}

      <InputWrapper className={full ? 'full' : ''}>
        <input
          className={error ? 'error' : ''}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setFieldValue(name, cleanInput(e.target.value))}
          onBlur={(e) => setFieldValue(name, cleanInput(e.target.value))}
          id={name}
          disabled={disabled}
          name={name}
        />
      </InputWrapper>

      {errorMessage && (
        <InputFieldError className={full ? 'full' : ''}>{errorMessage}</InputFieldError>
      )}
    </>
  );
};

export default InputField;
