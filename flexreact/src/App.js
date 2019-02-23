import React, { Component } from 'react';
import Nav from './Nav';
import Section from './Section';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Section />
      </div>
    );
  }
}

export default App;
