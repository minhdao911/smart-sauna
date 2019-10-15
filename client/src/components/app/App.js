import React, { Component } from 'react';
import './App.scss';

import Menu from '../menu';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'hello'
    }
  }

  render(){
    const { message } = this.state;
    return (
      <div className="App">
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
