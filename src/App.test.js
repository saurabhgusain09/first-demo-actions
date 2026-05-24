import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello CI\/CD/i);
  expect(textElement).toBeInTheDocument();
});