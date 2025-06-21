import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Unauthorized from '../Screens/Components/Unauthorized';

test('renders Unauthorized component without errors', () => {
  render(
    <MemoryRouter>
      <Unauthorized />
    </MemoryRouter>
  );
});
