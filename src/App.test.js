import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "vermelho"', () => {
  render(<App />);
  const linkElement = screen.getByText(/vermelho/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "amarelo"', () => {
  render(<App />);
  const linkElement = screen.getByText(/amarelo/i);
  expect(linkElement).toBeInTheDocument();
});
