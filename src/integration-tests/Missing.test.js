import React from 'react';
import { render } from '@testing-library/react';
import Missing from '../Screens/Components/Missing';

test('renders "Page Not Found"', () => {
  const { getByText } = render(<Missing />);
  const pageNotFoundText = getByText(/Page Not Found/i);
  expect(pageNotFoundText).toBeInTheDocument();
});
