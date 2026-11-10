import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import Cuarto from './Components/Cuarto';

const renderRoom = () => render(
  <MemoryRouter initialEntries={['/cuarto1']}>
    <Switch>
      <Route path="/cuarto1" component={Cuarto} />
      <Route path="/cuarto2" render={() => <div>Siguiente habitación</div>} />
    </Switch>
  </MemoryRouter>
);

const dropOnDoor = (door, item) => {
  const event = new Event('drop', { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'dataTransfer', {
    value: { getData: () => item }
  });
  fireEvent(door, event);
};

test('no abre la puerta sin una llave válida', () => {
  const { getByAltText, queryByText } = renderRoom();

  dropOnDoor(getByAltText('Puerta'), 'otro objeto');
  fireEvent.click(getByAltText('Puerta'));

  expect(queryByText('Siguiente habitación')).not.toBeInTheDocument();
});

test('abre la puerta después de soltar la llave', () => {
  const { getByAltText, getByText } = renderRoom();

  dropOnDoor(getByAltText('Puerta'), 'llave');
  fireEvent.click(getByAltText('Puerta'));

  expect(getByText('Siguiente habitación')).toBeInTheDocument();
});
