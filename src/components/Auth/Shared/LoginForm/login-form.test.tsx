import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '.././../../../helpers/test-helpers';
import LoginForm from './login-form';

expect.extend(toHaveNoViolations);

describe('Login Form', () => {
  test('Renders Login form', () => {
    render(<LoginForm />);
  });

  test('Login Form is accessible', async () => {
    const { container } = render(<LoginForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // test('sign in button should be clickable when all fields have values', async () => {
  //   const { getByLabelText, getByText } = render(<LoginForm />);
  //   const companyIDField = getByLabelText('Company ID/Username');
  //   const adminEmailField = getByLabelText('Admin Email');
  //   const submitButton = getByText('Sign In');
  //   expect(submitButton).toHaveClass('disabled');

  //   userEvent.type(companyIDField, 'adeola');
  //   userEvent.type(adminEmailField, 'adeola@deolaj.com');

  //   expect(submitButton).not.toHaveClass('disabled');
  // });
});
