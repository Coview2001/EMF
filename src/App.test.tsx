import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login button', () => {
  render(<App />);
  const loginButton = screen.getByText(/^Log In$/i);
  expect(loginButton).toBeInTheDocument();
});
