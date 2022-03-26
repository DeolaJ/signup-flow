import { FC, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import DropdownField from '../../../../../../Shared/FormFields/Dropdown';
import TextareaField from '../../../../../../Shared/FormFields/Textarea';
import InvertedButton from '../../../../../../Shared/Button/InvertedButton';
import InputField from '../../../../../../Shared/FormFields/InputField';
import UploadField from '../../../../../../Shared/FormFields/Upload';
import Radio from '../../../../../../Shared/FormFields/Radio';
import SpacedList from '../../../../../../Shared/SpacedList';

import { FormContainer, InputContainer } from '../../../../../../Shared/Form/form.styled';

import { RoleType } from '../../../../../../../types';
import { addUserRole, editUserRole } from '../../../../../../../store/reducers/form';
import countries from '../../../../../../../constants/countries';

type SingleRoleFormProps = {
  activeRole?: RoleType;
  cancelEditing?: () => void;
};

const divisionOptions = [
  {
    label: 'Engineering',
    value: 'Engineering',
  },
  {
    label: 'Sales',
    value: 'Sales',
  },
  {
    label: 'HR',
    value: 'HR',
  },
  {
    label: 'Finance',
    value: 'Finance',
  },
  {
    label: 'People',
    value: 'People',
  },
  {
    label: 'Operations',
    value: 'Operations',
  },
  {
    label: 'Product',
    value: 'Product',
  },
  {
    label: 'Data',
    value: 'Data',
  },
  {
    label: 'Others',
    value: 'Others',
  },
];

const SingleRoleForm: FC<SingleRoleFormProps> = ({ activeRole, cancelEditing }) => {
  const dispatch = useDispatch();
  const defaultValues = {
    title: '',
    salary: 0,
    division: '',
    location: '',
    yearsOfExperience: 0,
    jobDescription: '',
  };
  const [descriptionType, setDescriptionType] = useState('file');

  const extractRoleData = (role: RoleType) => {
    const { title, salary, division, location, yearsOfExperience, jobDescription } = role;
    return {
      title: title || '',
      salary: salary || 0,
      division: division || '',
      location: location || '',
      yearsOfExperience: yearsOfExperience || 0,
      jobDescription: jobDescription || '',
    };
  };

  const initialValues = activeRole ? extractRoleData(activeRole) : defaultValues;

  const errorCheck = (value: string | number, error: string | undefined) => {
    if (value) {
      return error !== undefined;
    }
    return false;
  };

  const errorMessage = (value: string | number, error: string | undefined) => {
    if (value) {
      return error !== undefined ? error : '';
    }
    return '';
  };

  const RoleSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'A valid role title has more than 2 characters')
      .max(250, 'A valid role title has less than 250 characters')
      .test(
        'check-roleTitle',
        'A valid role title does not contain only numbers',
        function (value) {
          return !Number(value || '');
        }
      )
      .required('Required'),
    salary: Yup.number()
      .min(0, 'A valid salary is more than 0')
      .max(1000000000, 'Please enter a valid salary')
      .required('Required'),
    division: Yup.string()
      .min(2, 'A valid role division has more than 2 characters')
      .max(100, 'A valid role division has less than 100 characters')
      .test(
        'check-roleDivision',
        'A valid role division does not contain only numbers',
        function (value) {
          return !Number(value || '');
        }
      )
      .required('Required'),
    location: Yup.string()
      .min(2, 'A valid location has more than 2 characters')
      .max(250, 'A valid location has less than 250 characters')
      .test(
        'check-roleLocation',
        'A valid location does not contain only numbers',
        function (value) {
          return !Number(value || '');
        }
      )
      .required('Required'),
    yearsOfExperience: Yup.number()
      .min(0, 'A valid number of years of experience is at least 0')
      .max(70, 'A valid number of years of experience is less than 70')
      .required('Required'),
    jobDescription: Yup.string()
      .min(2, 'A valid job description has more than 2 characters')
      .max(1500, 'A valid job description has less than 1500 characters')
      .test(
        'check-jobDescription',
        'A valid job description does not contain only numbers',
        function (value) {
          return !Number(value || '');
        }
      )
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RoleSchema}
      onSubmit={async (values, { resetForm }) => {
        const { title, division, salary, location, yearsOfExperience, jobDescription } = values;
        let roleDetails;
        if (!activeRole) {
          roleDetails = {
            id: `${Date.now()}`,
            title,
            salary,
            division,
            location,
            yearsOfExperience,
            jobDescription,
            createdAt: new Date().toJSON(),
            updatedAt: new Date().toJSON(),
          };
        } else {
          roleDetails = {
            id: activeRole.id,
            title,
            salary,
            division,
            location,
            yearsOfExperience,
            jobDescription,
            createdAt: activeRole.createdAt,
            updatedAt: new Date().toJSON(),
          };
        }
        try {
          if (!activeRole) {
            dispatch(addUserRole({ role: roleDetails }));
          } else {
            dispatch(editUserRole({ role: roleDetails }));
          }
        } finally {
          if (!activeRole) {
            resetForm();
          } else {
            cancelEditing?.();
          }
        }
      }}>
      {({ errors, values, handleSubmit, setFieldValue }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="role-form">
          <h4>Enter role details</h4>

          <InputContainer>
            <InputField
              label="Role Title"
              placeholder="Enter role title"
              name="title"
              type="text"
              value={values.title}
              error={errorCheck(values.title, errors.title)}
              errorMessage={errorMessage(values.title, errors.title)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Salary"
              placeholder="Enter salary"
              name="salary"
              type="number"
              value={values.salary}
              error={errorCheck(values.salary, errors.salary)}
              errorMessage={errorMessage(values.salary, errors.salary)}
            />
          </InputContainer>

          <InputContainer>
            <DropdownField
              label="Division"
              placeholder="Choose the division for this role"
              name="division"
              options={divisionOptions}
              value={values.division}
              error={errorCheck(values.division, errors.division)}
              errorMessage={errorMessage(values.division, errors.division)}
            />
          </InputContainer>

          <InputContainer>
            <DropdownField
              label="Location"
              placeholder="Where is the role located?"
              name="location"
              options={countries}
              value={values.location}
              error={errorCheck(values.location, errors.location)}
              errorMessage={errorMessage(values.location, errors.location)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Years of experience"
              placeholder="How many years of experiences are required?"
              name="yearsOfExperience"
              type="number"
              value={values.yearsOfExperience}
              error={errorCheck(values.yearsOfExperience, errors.yearsOfExperience)}
              errorMessage={errorMessage(values.yearsOfExperience, errors.yearsOfExperience)}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="description-type" className="job-description-type__label">
              Select Job Description type
            </label>
            <SpacedList compact>
              <Radio
                label="File"
                name="description-type"
                checked={descriptionType === 'file'}
                onChange={() => {
                  setDescriptionType('file');
                  setFieldValue('jobDescription', '');
                }}
              />
              <Radio
                label="Plain text"
                name="description-type"
                checked={descriptionType === 'text'}
                onChange={() => {
                  setDescriptionType('text');
                  setFieldValue('jobDescription', '');
                }}
              />
            </SpacedList>
          </InputContainer>

          {descriptionType === 'file' && (
            <InputContainer>
              <UploadField
                label="Job description (.md or .txt)"
                name="jobDescription"
                value={values.jobDescription}
                error={errorCheck(values.jobDescription, errors.jobDescription)}
                errorMessage={errorMessage(values.jobDescription, errors.jobDescription)}
              />
            </InputContainer>
          )}

          {descriptionType === 'text' && (
            <InputContainer>
              <TextareaField
                label="Job description"
                placeholder="Enter the job description"
                name="jobDescription"
                value={values.jobDescription}
                error={errorCheck(values.jobDescription, errors.jobDescription)}
                errorMessage={errorMessage(values.jobDescription, errors.jobDescription)}
              />
            </InputContainer>
          )}

          <InvertedButton
            className="add-role-button"
            disabled={Object.keys(errors || {}).length > 0}
            text={!activeRole ? 'Add' : 'Update'}
            size="sm"
            type="submit"
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default SingleRoleForm;
