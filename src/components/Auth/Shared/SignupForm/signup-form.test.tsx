import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '.././../../../helpers/test-helpers';
import SignupForm from './signup-form';

// Ignoring accessibility tests for React Select library
jest.mock('react-select', () => () => (
  <>
    <label htmlFor="mockedReactSelect">Funding Stage</label>
    <select id="mockedReactSelect" onChange={() => null}>
      <option value="Seed">Pre-Seed</option>
      <option value="Seed">Seed</option>
      <option value="Seed">Series A</option>
      <option value="Seed">Series B</option>
      <option value="Seed">Series C</option>
    </select>
  </>
));

expect.extend(toHaveNoViolations);

describe('Signup Form', () => {
  test('Renders Signup form', () => {
    render(<SignupForm />);
  });

  test('Signup Form is accessible', async () => {
    const { container } = render(<SignupForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // test('signup button should be clickable when all fields have values', async () => {
  //   const { getByLabelText, getByTestId, getByText } = render(<SignupForm />);
  //   const companyIDField = getByLabelText('Company ID/Username');
  //   const companyNameField = getByLabelText('Company Name');
  //   const locationField = getByLabelText('Location');
  //   const remoteWorkField = getByLabelText('Remote Work Policy');
  //   const companySizeField = getByLabelText('Company Size');
  //   const fundingStageField = getByTestId('mockedReactSelect');
  //   const companyURLField = getByLabelText('Company URL');
  //   const adminEmailField = getByLabelText('Admin Email');
  //   const adminNameField = getByLabelText('Admin Name');
  //   const submitButton = getByText('Create Account');
  //   expect(submitButton).toHaveClass('disabled');

  //   userEvent.type(companyIDField, 'adeola');
  //   userEvent.type(companyNameField, 'Dee Ventures');
  //   userEvent.type(locationField, 'NGA');
  //   userEvent.type(remoteWorkField, 'Remote');
  //   fireEvent.change(companySizeField, { target: { value: 0 } });
  //   userEvent.selectOptions(fundingStageField, 'Seed');
  //   userEvent.type(companyURLField, 'https://deolaj.com');
  //   userEvent.type(adminEmailField, 'adeola@deolaj.com');
  //   userEvent.type(adminNameField, 'Adeola');

  //   expect(submitButton).not.toHaveClass('disabled');
  // });
});
