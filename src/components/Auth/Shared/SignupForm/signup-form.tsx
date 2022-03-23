import { FC, useRef, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import throttle from 'lodash/throttle';
import isEqual from 'lodash/isEqual';

import InputField from '../../../Shared/FormFields/InputField';
import DropdownField from '../../../Shared/FormFields/Dropdown';
import Loader from '../../../Shared/Loader';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';

import { selectIsLoggedIn, selectUser, selectUsers } from '../../../../store/selectors';

import { doSignupUser } from '../../../../store/actions/user';

import { FormContainer, InputContainer, FormError } from '../../../Shared/Form/form.styled';
import { ErrorMessageType } from '../../../../types';
import { isUserValid } from '../../../../helpers';

const fundingStages = [
  {
    label: 'Pre-seed',
    value: 'Pre-seed',
  },
  {
    label: 'Seed',
    value: 'Seed',
  },
  {
    label: 'Series A',
    value: 'Series A',
  },
  {
    label: 'Series B',
    value: 'Series B',
  },
  {
    label: 'Series C',
    value: 'Series C',
  },
  {
    label: 'Series D',
    value: 'Series D',
  },
  {
    label: 'IPO',
    value: 'IPO',
  },
  {
    label: 'Others',
    value: 'Others',
  },
];

const SignupForm: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loggedInUser = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const initialValues = {
    companyID: '',
    companyName: '',
    location: '',
    remoteWorkPolicy: '',
    companySize: 0,
    fundingStage: '',
    url: '',
    adminEmail: '',
    adminName: '',
  };
  const signupErrorMessage: ErrorMessageType = {
    errorMessages: {},
    errorFields: [],
    hasError: false,
  };

  const errorCheck = (key: string, value: string | boolean | number, error: string | undefined) => {
    if (value) {
      return signupErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (
    key: string,
    value: string | boolean | number,
    error: string | undefined
  ) => {
    if (value) {
      return signupErrorMessage.errorMessages?.[key] || (error !== undefined ? error : '');
    }
    return '';
  };

  const checkCompanyID = useRef(
    throttle((companyID, loggedIn, userID) => {
      if (loggedIn && userID === companyID) return true;
      return !isUserValid(users, companyID || '');
    }, 500)
  );

  const SignUpSchema = Yup.object().shape({
    companyID: Yup.string()
      .min(2, 'A valid company id has more than 2 characters')
      .max(100, 'A valid company id has less than 100 characters')
      .test('check-companyID', 'This company ID is not available', function (value) {
        return checkCompanyID.current(value, isLoggedIn, loggedInUser?.id) || false;
      })
      .required('Required'),
    companyName: Yup.string()
      .min(2, 'A valid company name has more than 2 characters')
      .max(100, 'A valid company name has less than 100 characters')
      .test(
        'check-companyName',
        'A valid company name does not contain only numbers',
        function (value) {
          return !Number(value || '');
        }
      )
      .required('Required'),
    location: Yup.string()
      .max(100, 'A valid company id has less than 100 characters')
      .required('Required'),
    remoteWorkPolicy: Yup.string()
      .max(100, 'A valid company remote work policy has less than 100 characters')
      .required('Required'),
    companySize: Yup.number().min(1, 'A valid company size is at least one').required('Required'),
    fundingStage: Yup.string().required('Required'),
    url: Yup.string()
      .test('check-url', 'Please enter a valid url', function (value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
          value || ''
        );
      })
      .required('Required'),
    adminEmail: Yup.string().email('Please enter a valid email').required('Required'),
    adminName: Yup.string()
      .min(2, 'A valid admin name has more than 2 characters')
      .max(100, 'A valid admin name has less than 100 characters')
      .test(
        'check-adminName',
        'A valid admin name does not contain only numbers',
        function (value) {
          return !Number(value || '');
        }
      )
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        const {
          companyID,
          companyName,
          location,
          remoteWorkPolicy,
          companySize,
          fundingStage,
          url,
          adminEmail,
          adminName,
        } = values;
        const userDetails = {
          id: companyID,
          companyName,
          location,
          remoteWorkPolicy,
          companySize,
          fundingStage,
          url,
          createdAt: new Date().toJSON(),
          updatedAt: new Date().toJSON(),
          admin: {
            emailAddress: adminEmail,
            name: adminName,
          },
          verified: false,
        };
        setIsCreatingAccount(true);
        dispatch(doSignupUser(userDetails, values.companyID));
        setIsCreatingAccount(false);
      }}>
      {({ errors, values, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="signup-form">
          <h2>
            <span className="--desktop-only">To set up your company account, please sign up</span>
            <span className="--mobile-only">Create company account</span>
          </h2>

          <p>
            {signupErrorMessage.hasError && (
              <FormError>{signupErrorMessage || 'There was an error'}</FormError>
            )}
          </p>

          <h4>Basic Section</h4>

          <InputContainer>
            <InputField
              label="Company ID/Username"
              placeholder="Enter company id or username"
              name="companyID"
              type="text"
              value={values.companyID}
              error={errorCheck('companyID', values.companyID, errors.companyID)}
              errorMessage={errorMessage('companyID', values.companyID, errors.companyID)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Company Name"
              placeholder="Enter company name"
              name="companyName"
              type="text"
              value={values.companyName}
              error={errorCheck('companyName', values.companyName, errors.companyName)}
              errorMessage={errorMessage('companyName', values.companyName, errors.companyName)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Location"
              placeholder="Where is the company situated?"
              name="location"
              type="text"
              value={values.location}
              error={errorCheck('location', values.location, errors.location)}
              errorMessage={errorMessage('location', values.location, errors.location)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Remote Work Policy"
              placeholder="What is your remote work policy"
              name="remoteWorkPolicy"
              type="text"
              value={values.remoteWorkPolicy}
              error={errorCheck(
                'remoteWorkPolicy',
                values.remoteWorkPolicy,
                errors.remoteWorkPolicy
              )}
              errorMessage={errorMessage(
                'remoteWorkPolicy',
                values.remoteWorkPolicy,
                errors.remoteWorkPolicy
              )}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Company Size"
              placeholder="What is the size of your company?"
              name="companySize"
              type="number"
              value={values.companySize}
              error={errorCheck('companySize', values.companySize, errors.companySize)}
              errorMessage={errorMessage('companySize', values.companySize, errors.companySize)}
            />
          </InputContainer>

          <InputContainer>
            <DropdownField
              label="Funding Stage"
              placeholder="Enter current funding stage"
              name="fundingStage"
              options={fundingStages}
              value={values.fundingStage}
              error={errorCheck('fundingStage', values.fundingStage, errors.fundingStage)}
              errorMessage={errorMessage('fundingStage', values.fundingStage, errors.fundingStage)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Company URL"
              placeholder="Enter company website URL"
              name="url"
              type="text"
              value={values.url}
              error={errorCheck('url', values.url, errors.url)}
              errorMessage={errorMessage('url', values.url, errors.url)}
            />
          </InputContainer>

          <br />

          <h4>Admin Section</h4>

          <InputContainer>
            <InputField
              label="Admin Email"
              placeholder="Enter admin email address"
              name="adminEmail"
              type="email"
              value={values.adminEmail}
              error={errorCheck('adminEmail', values.adminEmail, errors.adminEmail)}
              errorMessage={errorMessage('adminEmail', values.adminEmail, errors.adminEmail)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Admin Name"
              placeholder="Enter admin name"
              name="adminName"
              type="text"
              value={values.adminName}
              error={errorCheck('adminName', values.adminName, errors.adminName)}
              errorMessage={errorMessage('adminName', values.adminName, errors.adminName)}
            />
          </InputContainer>

          <SecondaryButton
            className="signup-button"
            disabled={isEqual(values, initialValues) || Object.keys(errors || {}).length > 0}
            text={
              <>
                {isCreatingAccount && <Loader light />}
                {isCreatingAccount ? 'Creating' : 'Create'} Account
              </>
            }
            size="lg"
            type="submit"
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default SignupForm;
