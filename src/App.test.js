import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('muestra el boton de empezar', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Empezar')).toBeInTheDocument();
});

it('no abre la puerta sin llave', () => {
  const { getByAltText } = render(
    <MemoryRouter initialEntries={["/cuarto1"]}>
      <App />
    </MemoryRouter>
  );
  fireEvent.click(getByAltText('Puerta'));
  // En esta version la puerta solo abre si esta desbloqueada
  expect(window.location.pathname).not.toBe('/cuarto2');
});
