import React from 'react';
import { render, screen } from '@testing-library/react';
import Missing from '../Screens/Components/Missing';

test('renders Page Not Found message with a link to the login page', () => {
  render(<Missing />);

  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Visit Our Login Page/i })).toBeInTheDocument();
});
