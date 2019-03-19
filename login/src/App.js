import React, { Component } from 'react';
import Form from '../src/Components/Forms/Form';
import Signin from '../src/Components/Signin/Signin';
import Button from '../src/Components/Button/Button';
import './App.css';

class App extends Component {
  state={
    showStatus:'none',
    statusLogin: 'none'
  }
  
  registration = ()=>{
    this.setState({
      showStatus:'block',
      statusLogin: 'none'
    })
  }

  login = () => {
    this.setState({
      showStatus:'none',
      statusLogin: 'block'
    })
  }

  render() {
    return (
      <div className="App">
        <div id="overlay"></div>
        <div className = "button-standart">
        <Button name = "Create account" click = {this.registration }/>
        <Button name = "Sign in" click = {this.login }/>
        </div>
       

        <Form status = {this.state.showStatus}/>
        <Signin status = {this.state.statusLogin}/>
        </div>
    );
  }
}

export default App;
