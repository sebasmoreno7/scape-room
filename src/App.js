import React, { Component } from 'react';
import './App.css';
import Casa from './Components/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cuarto from './Components/Cuarto';
import Error from './Components/Error';
import CuartoNext from './Components/CuartoNext';
import Perder from './Components/Perder';
class App extends Component {
  render(){

    return(
      <BrowserRouter> 
      <Switch> 
        <Route path="/" exact component={Casa}></Route>
        <Route path="/cuarto1" exact component={Cuarto}></Route>
        <Route path="/cuarto2" exact component={CuartoNext}></Route>
        <Route path="/perder" exact component={Perder}></Route>
        <Route component={Error}></Route>
      </Switch>
      </BrowserRouter>
    )
  }
}
  

export default App;
