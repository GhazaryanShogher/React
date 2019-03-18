import React, { Component } from 'react';
import Form from '../src/Components/Forms/Form';
import Signin from '../src/Components/Signin/Signin';
import Button from '../src/Components/Button/Button';
import './App.css';

class App extends Component {
  stat = ()=> alert("hi");
  render() {
    return (
      <div className="App">
        <div id="overlay"></div>
        <div>
        <Button name = "Create account" click = {this.stat }/>
        <Button name = "Sign in"/>
        </div>
       

        <Form />
        {/* <Signin /> */}
        </div>
    );
  }
}

export default App;
