import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cuarto from './Components/Cuarto';
import Error from './Components/Error';
import CuartoNext from './Components/CuartoNext';
import Perder from './Components/Perder';
import Clave from './Components/Clave';
import Ganar from './Components/Ganar';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cuarto1" exact component={Cuarto} />
      <Route path="/cuarto2" exact component={CuartoNext} />
      <Route path="/perder" exact component={Perder} />
      <Route path="/ganar" exact component={Ganar} />
      <Route path="/clave" exact component={Clave} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
