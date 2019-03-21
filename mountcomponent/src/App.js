import React, { Component } from 'react';
import Count from "./Count";
import Fetch from "./Fetch";
import Lifecycle from "./Lifecycle";

class App extends Component {
  state = {
    clicked: true
  }
  deleteComponent = () => {
    this.setState({
        clicked: false
    })
}
  render() {
    return (
      <div className="App">
      <Lifecycle />
        {this.state.clicked ? <Fetch /> : <Count />}
        <button className = "button-style" onClick={this.deleteComponent}>Click</button>
      </div>
    );
  }
}

export default App;