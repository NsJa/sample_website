import { render, screen } from '@testing-library/react';
import App from './App';

test('render Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World!/i);
  expect(linkElement).toBeInTheDocument();
});
