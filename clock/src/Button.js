import React, { Component } from 'react';
import Input from './Input';
import './Button.css';

class Button extends Component {
  state = {
      value: "click",
  };
  timeValue = document.getElementById('time').value;
  const time = (timeValue) => {
     console.log(timeValue);
  }
  
    
    
  render() {
    return (
      <React.Fragment>
      <input type = "number" min="0" max="12" className="inpVal" id="time"></input>
      <input type = "button" value={this.state.value} className="btn" id = "timeVal" onClick="time()"></input>
      <div className="clock">
        <div id="overlay">
          <div className = "arrow"></div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Button;
