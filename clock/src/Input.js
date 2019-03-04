import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
      <React.Fragment>
      <input type = "number" min="0" max="12" className="inpVal"></input>
      </React.Fragment>
    );
  }
}

export default Input;
