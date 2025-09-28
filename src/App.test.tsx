import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Rik Sportel text on the site', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rik Sportel/i);
  expect(linkElement).toBeInTheDocument();
});
