import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import '../Forms/Form.css';

//login popup
class Signin extends Component {
  state = {
    email:"",
    password:""
  };
  
//   postRequest = (url, data) => {
//     return fetch(url, {
//       credentials: 'same-origin', // 'include', default: 'omit'
//       method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//       body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     })
//     .then(response => response.json())
//   }
// data = {
//   email: this.state.email,
//   password:this.state.password
// };
//   this.postRequest('http://rest.learncode.academy/api/learncode/friends', data)
//   .then(data => console.log(data, "ayo")) // Result from the `response.json()` call
//   .catch(error => console.error(error));


  callback = (e) => {
    if(e.target.id == "emailaddress"){
      this.setState({email:e.target.value})
    } else 
    this.setState({password:e.target.value})
  }

  shouldComponentUpdate(nextProps, nextState){      
    console.log("shouldn e"); 
      if(nextState.email == "" && nextState.password == ""){
         return true;
      }
        return false;         
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    alert('Loged in')
        
  };

  render() {
    return (
        <div className="form" style={{display:this.props.status}}>
            <h1>Sign in</h1>
            <Input callback = {this.callback} id="emailaddress" type="email" placeholder="Email"/>
            <Input  callback = {this.callback} id="pass" type="password" placeholder="Password"/>
            <Button name = "Log in"  onclick = {this. }/>
        </div>
    );
  }
}

export default Signin;
