import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Name from '../components/Name';

describe('Name Component', () => {
  test('renders the title placeholder', () => {
    const { getByPlaceholderText } = render(<Name />);
    expect(getByPlaceholderText('Untitled')).toBeInTheDocument();
  });

  test('renders the new title when updated by the user', () => {
    const { getByPlaceholderText } = render(<Name />);
    userEvent.type(getByPlaceholderText('Untitled'), 'Paint App');
    expect(getByPlaceholderText('Untitled')).toHaveValue('Paint App');
  });
});
