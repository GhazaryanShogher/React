import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import '../Forms/Form.css';

//login popup
class Signin extends Component {
  render() {
    return (
        <div className="form">
            <h1>Sign in</h1>
            <Input id="emailaddress" type="email" placeholder="Email"/>
            <Input id="pass" type="password" placeholder="Password"/>
            <Button name = "Log in"/>
        </div>
    );
  }
}

export default Signin;
