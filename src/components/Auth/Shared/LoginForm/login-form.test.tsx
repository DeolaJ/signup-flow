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
});
