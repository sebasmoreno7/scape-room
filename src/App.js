import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import casa from './Home';
const App= () => <BrowserRouter>
  <Switch>
    <Route path="/" exact component= {casa}></Route>
    
  </Switch>
</BrowserRouter>
  

export default App;
