import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "vermelho"', () => {
  render(<App />);
  const linkElement = screen.getByText(/vermelho/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "azul"', () => {
  render(<App />);
  const linkElement = screen.getByText(/azul/i);
  expect(linkElement).toBeInTheDocument();
});
