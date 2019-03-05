import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  state = {
      text: "click",
      value:"",
      degree: "",
  };
 
  time = (event) => {     
    this.setState(
      {   
        value:30*event.target.value
      }
      )
  }
   rotate = () => {
    this.setState(
      {  
         degree:this.state.value
      })
   }
   
          
  render() {
    console.log(this.state.degree)
    return (
      <React.Fragment>
      <input type = "number" min="0" max="12" className="inpVal" id="time"  onChange = {this.time} />
      <input type = "button" value={this.state.text} className="btn" id = "timeVal" onClick = {this.rotate} />
      <div className="clock">
        <div id="overlay" style = {{transform: `rotate${this.state.style}deg`}}>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Button;
