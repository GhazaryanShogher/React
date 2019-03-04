import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    state = {
        value: "click"
    }
  render() {
    return (
      <React.Fragment>
      <input type = "button" value={this.state.value} className="btn"></input>
      <div className="clock">
        <div id="overlay"></div>
      </div>
      </React.Fragment>
    );
  }
}

export default Button;
