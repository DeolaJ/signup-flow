import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '../../../../../../../helpers/test-helpers';
import SingleRoleForm from './single-role-form';

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

describe('Single Role Form', () => {
  test('Renders Single Role form', () => {
    render(<SingleRoleForm />);
  });

  test('Single Role Form is accessible', async () => {
    const { container } = render(<SingleRoleForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
