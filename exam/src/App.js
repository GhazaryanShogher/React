import React, { Component } from 'react';
import {connect} from 'react-redux';
import Main from './Main';
import Header from './Header';
// import {Switch, Route } from 'react-router-dom';
import ReduxEx from "./reduxEx";

class App extends Component {

    postRequest =  (url, data=null, method="GET") => {

        let requestType = data !== null ? {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: method, // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          } : null ;

        return fetch(url, requestType)
        .then(response => response.json())
      }
    

    componentDidMount(){
        this.postRequest('https://reqres.in/api/users', {
            "name": "morpheus",
            "job": "leader"
        }, "POST")
  .then(data => console.log(data, "ayo")) // Result from the `response.json()` call
  .catch(error => console.error(error))


    this.postRequest('https://reqres.in/api/users/')
  .then(data => console.log(data, "get zapros")) // Result from the `response.json()` call
  .catch(error => console.error(error))
    
    }

    render(){
        return(
            <div>
                <ReduxEx />
                {/* <Switch>
                    <Route path='/header' component={Header} />
                    <Route path='/main' component={Main} />
                </Switch> */}
            </div>
     
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.users.name,
        add: state.math.add
    }
}

const mapToDispatch = dispatch => ({
    changeStateName: newState => dispatch({type: 'CHANGE_NAME', payload: newState}),
    changeStateAdd: newState => dispatch({type: 'ADD_NUMBER', payload: newState})
});

export default connect(mapStateToProps,mapToDispatch)(App);

