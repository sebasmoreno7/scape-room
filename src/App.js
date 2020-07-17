import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import casa from './Home';
import Cuarto from './Cuarto';
const App= () => <BrowserRouter>
  <Switch>
    <Route path="/" exact component= {casa}></Route>
    <Route path="/extern" exact component= {Cuarto}></Route>
    <Route component={() => <div>404</div>}></Route>
  </Switch>
</BrowserRouter>
  

export default App;
