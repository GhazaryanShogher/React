import React, { Component } from 'react';
import Nav from './Nav';
import Section from './Section';
import About from './About';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Section />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
