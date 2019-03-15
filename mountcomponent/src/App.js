import React, { Component } from 'react';
import Count from "./Count";
import Fetch from "./Fetch";

import './App.css';

class App extends Component {
  state = {
    clicked: false
  }
  deleteComponent = () => {
    this.setState({
        clicked: true
    })
}
  render() {
    return (
      <div className="App">
        {this.state.clicked ? <Fetch /> : <Fetch />}
        {/* <button onClick={this.deleteComponent}>Click</button> */}
      </div>
    );
  }
}

export default App;