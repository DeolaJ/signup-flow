import { FC, FormEvent, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isEqual } from 'lodash';
import { useDispatch } from 'react-redux';

import InputField from '../../../Shared/FormFields/InputField';
import Loader from '../../../Shared/Loader';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import BareButton from '../../../Shared/Button/BareButton';

import { doLoginUser } from '../../../../store/actions/user';

import { FormContainer, InputContainer } from '../../../Shared/Form/form.styled';

const LoginSchema = Yup.object().shape({
  companyID: Yup.string().required('Required'),
  adminEmail: Yup.string().email('Invalid email address').required('Required'),
});

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const initialValues = {
    companyID: '',
    adminEmail: '',
  };

  const errorCheck = (value: string, error: string | undefined) => {
    if (value) {
      return error !== undefined;
    }
    return false;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        const { companyID, adminEmail } = values;
        const loginDetails = {
          userID: companyID,
          adminEmail,
        };
        try {
          setIsLoggingIn(true);
          dispatch(doLoginUser(loginDetails));
        } catch {
          setIsLoggingIn(false);
        } finally {
          setIsLoggingIn(false);
        }
      }}>
      {({ errors, values, handleSubmit }) => (
        <FormContainer
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Log In to your account.</h2>

          <InputContainer>
            <InputField
              label="Company ID/Username"
              placeholder="Enter company ID/username"
              name="companyID"
              type="text"
              value={values.companyID}
              error={errorCheck(values.companyID, errors.companyID)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Admin Email"
              placeholder="Enter admin email address"
              name="adminEmail"
              type="email"
              value={values.adminEmail}
              error={errorCheck(values.adminEmail, errors.adminEmail)}
            />
          </InputContainer>

          <SecondaryButton
            className="login-button"
            disabled={isEqual(values, initialValues) || Object.keys(errors || {}).length > 0}
            text={
              <>
                {isLoggingIn && <Loader light />}
                {isLoggingIn ? 'Signing' : 'Sign'} In
              </>
            }
            size="lg"
            type="submit"
          />

          <a href="mailto:support@talentdrop.com">
            <BareButton
              text="Forgotten Login? Email support@talentdrop.com."
              size="sm"
              className="fp-button"
            />
          </a>
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
