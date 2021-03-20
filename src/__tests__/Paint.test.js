import { render, screen } from '@testing-library/react';
import Paint from '../components/App';

describe('Paint Component', () => {
  test('uses semantic elements', () => {
    render(<Paint />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders the default window size', () => {
    render(<Paint />);
    expect(screen.getByTestId('window_size')).toHaveTextContent('1024 x 768');
  });
});
