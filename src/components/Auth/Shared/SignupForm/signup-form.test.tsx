import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '.././../../../helpers/test-helpers';
import SignupForm from './signup-form';

// Ignoring accessibility tests for React Select library
jest.mock('react-select', () => () => (
  <>
    <label htmlFor="mockedReactSelect">Select</label>
    <select id="mockedReactSelect" onChange={() => null}>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
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
});
