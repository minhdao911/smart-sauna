import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Menu from './components/Menu';
import Monitoring from './components/Monitoring';

class App extends Component {
  
  render(){
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/">
              <Redirect to="/monitoring" />
            </Route>
            <Route path="/monitoring">
              <Monitoring />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
