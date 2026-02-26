import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Systems Language Toolkit', () => {
  render(<App />);
  const element = screen.getByText(/Systems Language Toolkit/i);
  expect(element).toBeInTheDocument();
});
