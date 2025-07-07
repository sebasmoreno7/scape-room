import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders comment input on home page', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add a comment/i);
  expect(inputElement).toBeInTheDocument();
});
