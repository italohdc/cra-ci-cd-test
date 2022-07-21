import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "vermelho"', () => {
  render(<App />);
  const linkElement = screen.getByText(/vermelho/i);
  expect(linkElement).toBeInTheDocument();
});
