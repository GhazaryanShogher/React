import React, { Component } from 'react';
import Input from './Input';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Button />
      </div>
    );
  }
}

export default App;
