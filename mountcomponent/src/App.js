import React, { Component } from 'react';
import Count from "./Count";
import Fetch from "./Fetch";

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
        {this.state.clicked ? <Fetch /> : <Count />}
        <button onClick={this.deleteComponent}>Click</button>
      </div>
    );
  }
}

export default App;