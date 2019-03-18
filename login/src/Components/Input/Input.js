import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
          <div className="w3-rest">
              <input  id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} required />
          </div>
    );
  }
}

export default Input;
