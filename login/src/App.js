import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="overlay"></div>
        <div className="form">
          <h1>Registration</h1>
          <div className="w3-rest">
              <input  id="first" type="text" placeholder="First Name" required />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
