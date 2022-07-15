import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

it('renders "Welcome to the Enterprise-Scale Landing Zone Generator"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Enterprise-Scale Landing Zone Generator/i);
  expect(linkElement).toBeInTheDocument();
});
