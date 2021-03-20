import { render, fireEvent } from '@testing-library/react';
import RefreshButton from '../components/RefreshButton';

describe('RefreshButton Component', () => {
  const props = {
    cb: jest.fn()
  };

  test('renders the refresh icon', () => {
    const { getByRole } = render(<RefreshButton {...props} />);
    expect(getByRole('button')).toHaveTextContent('↺');
  });

  test('calls the callback function when the refresh icon is clicked', () => {
    const { getByRole } = render(<RefreshButton {...props} />);
    fireEvent.click(getByRole('button'));
    expect(props.cb).toHaveBeenCalled();
  });
});
