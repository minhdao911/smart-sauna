import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }

  componentDidMount(){
    fetch("/api/hello")
      .then(res => res.json())
      .then(res => this.setState({message: res.message}));
  }

  render(){
    const { message } = this.state;
    return (
      <div className="App">
        <p>{message}</p>
      </div>
    );
  }
}

export default App;
