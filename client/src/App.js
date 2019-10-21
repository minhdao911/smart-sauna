import React, { Component } from 'react';
import './App.scss';

import Menu from './components/Menu';
import Monitoring from './components/Monitoring';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Menu />
        <Monitoring />
      </div>
    );
  }
}

export default App;
