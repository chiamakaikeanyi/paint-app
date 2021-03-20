import { render, fireEvent } from '@testing-library/react';
import ColorPicker from '../components/ColorPicker';

describe('ColorPicker Component', () => {
  const props = {
    colors: ['#2b2e7f', '#363aa6', '#4a4fc5', '#7073d3', '#9699df'],
    activeColor: '#2b2e7f',
    setActiveColor: jest.fn()
  };

  test('renders the input field correctly', () => {
    const { getAllByRole } = render(<ColorPicker {...props} />);
    expect(getAllByRole('radio')).toHaveLength(5);
  });

  test('sets the first color in the array as the default', () => {
    const { getByTestId } = render(<ColorPicker {...props} />);
    expect(getByTestId('#2b2e7f')).toBeChecked();
    expect(getByTestId('span-#2b2e7f')).toHaveStyle('background-color: #2b2e7f;');
  });

  test('sets the appropriate background color', () => {
    const { getByTestId } = render(<ColorPicker {...props} />);
    fireEvent.change(getByTestId('#363aa6'));
    expect(getByTestId('span-#363aa6')).toHaveStyle('background-color: #363aa6;');
  });
});
