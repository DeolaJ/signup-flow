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

import { FormContainer, InputContainer } from '../../../Shared/Form/form.styled';
import { LoggedInUserType } from '../../../../types';
import { isUserValid } from '../../../../helpers';
import { doUpdateUserInfo } from '../../../../store/actions/form';
import countries from '../../../../constants/countries';

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

type SignupFormProps = {
  nextStage?: () => void;
};

const SignupForm: FC<SignupFormProps> = ({ nextStage }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loggedInUser = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const defaultValues = {
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

  const extractUserData = (user: LoggedInUserType) => {
    const { id, companyName, location, remoteWorkPolicy, companySize, fundingStage, url, admin } =
      user;
    return {
      companyID: id || '',
      companyName: companyName || '',
      location: location || '',
      remoteWorkPolicy: remoteWorkPolicy || '',
      companySize: companySize || 0,
      fundingStage: fundingStage || '',
      url: url || '',
      adminEmail: admin?.emailAddress || '',
      adminName: admin?.name || '',
    };
  };

  const initialValues = isLoggedIn && loggedInUser ? extractUserData(loggedInUser) : defaultValues;

  const errorCheck = (value: string | boolean | number, error: string | undefined) => {
    if (value) {
      return error !== undefined;
    }
    return false;
  };

  const errorMessage = (value: string | boolean | number, error: string | undefined) => {
    if (value) {
      return error !== undefined ? error : '';
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
        const urlCheck = new RegExp(
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
        );
        return Boolean((value || '').match(urlCheck));
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
      onSubmit={async (values) => {
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
        let userDetails;
        if (!loggedInUser) {
          userDetails = {
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
        } else {
          userDetails = {
            id: companyID,
            companyName,
            location,
            remoteWorkPolicy,
            companySize,
            fundingStage,
            url,
            createdAt: loggedInUser?.createdAt,
            updatedAt: new Date().toJSON(),
            admin: {
              emailAddress: adminEmail,
              name: adminName,
            },
            verified: loggedInUser?.verified,
          };
        }
        try {
          if (!loggedInUser) {
            setIsCreatingAccount(true);
            dispatch(doSignupUser(userDetails, values.companyID));
          } else {
            dispatch(doUpdateUserInfo(userDetails));
            nextStage?.();
          }
        } catch {
          if (!loggedInUser) {
            setIsCreatingAccount(false);
          }
        } finally {
          if (!loggedInUser) {
            setIsCreatingAccount(false);
          }
        }
      }}>
      {({ errors, values, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={`signup-form ${isLoggedIn ? 'logged-in' : ''}`}>
          {!isLoggedIn ? (
            <h2>
              <span className="--desktop-only">To set up your company account, please sign up</span>
              <span className="--mobile-only">Create company account</span>
            </h2>
          ) : (
            <h2 className="edit-company-information">Edit Company Information</h2>
          )}

          <h3>Basic Section</h3>

          <InputContainer>
            <InputField
              label="Company ID/Username"
              placeholder="Enter company id or username"
              name="companyID"
              type="text"
              value={values.companyID}
              error={errorCheck(values.companyID, errors.companyID)}
              errorMessage={errorMessage(values.companyID, errors.companyID)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Company Name"
              placeholder="Enter company name"
              name="companyName"
              type="text"
              value={values.companyName}
              error={errorCheck(values.companyName, errors.companyName)}
              errorMessage={errorMessage(values.companyName, errors.companyName)}
            />
          </InputContainer>

          <InputContainer>
            <DropdownField
              label="Location"
              placeholder="Where is the company situated?"
              name="location"
              options={countries}
              value={values.location}
              error={errorCheck(values.location, errors.location)}
              errorMessage={errorMessage(values.location, errors.location)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Remote Work Policy"
              placeholder="What is your remote work policy"
              name="remoteWorkPolicy"
              type="text"
              value={values.remoteWorkPolicy}
              error={errorCheck(values.remoteWorkPolicy, errors.remoteWorkPolicy)}
              errorMessage={errorMessage(values.remoteWorkPolicy, errors.remoteWorkPolicy)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Company Size"
              placeholder="What is the size of your company?"
              name="companySize"
              type="number"
              value={values.companySize}
              error={errorCheck(values.companySize, errors.companySize)}
              errorMessage={errorMessage(values.companySize, errors.companySize)}
            />
          </InputContainer>

          <InputContainer>
            <DropdownField
              label="Funding Stage"
              placeholder="Enter current funding stage"
              name="fundingStage"
              options={fundingStages}
              value={values.fundingStage}
              error={errorCheck(values.fundingStage, errors.fundingStage)}
              errorMessage={errorMessage(values.fundingStage, errors.fundingStage)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Company URL"
              placeholder="Enter company website"
              name="url"
              type="text"
              value={values.url}
              error={errorCheck(values.url, errors.url)}
              errorMessage={errorMessage(values.url, errors.url)}
            />
          </InputContainer>

          <br />

          <h3>Admin Section</h3>

          <InputContainer>
            <InputField
              label="Admin Email"
              placeholder="Enter admin email address"
              name="adminEmail"
              type="email"
              value={values.adminEmail}
              error={errorCheck(values.adminEmail, errors.adminEmail)}
              errorMessage={errorMessage(values.adminEmail, errors.adminEmail)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Admin Name"
              placeholder="Enter admin name"
              name="adminName"
              type="text"
              value={values.adminName}
              error={errorCheck(values.adminName, errors.adminName)}
              errorMessage={errorMessage(values.adminName, errors.adminName)}
            />
          </InputContainer>

          <SecondaryButton
            className="signup-button"
            disabled={
              (!isLoggedIn && isEqual(values, initialValues)) ||
              Object.keys(errors || {}).length > 0
            }
            text={
              !isLoggedIn ? (
                <>
                  {isCreatingAccount && <Loader light />}
                  {isCreatingAccount ? 'Creating' : 'Create'} Account
                </>
              ) : (
                'Next'
              )
            }
            size={!isLoggedIn ? 'lg' : 'sm'}
            type="submit"
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default SignupForm;
