import { render, screen } from '@testing-library/react';
import App from './App';

test('renders backpack app without crashing', () => {
  render(<App />);
  const titleElement = screen.getByText(/my travel backpack/i);
  expect(titleElement).toBeInTheDocument();
});
