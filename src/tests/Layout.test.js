import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Screens/Components/Layout';

test('renders Layout component without errors', () => {
  render(<Layout />);
});
