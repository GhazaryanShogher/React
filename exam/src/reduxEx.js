import React, { Component } from 'react';
import reducer from "./reducers";
import {changeText, incrementNumber, decrementNumber, resetNumber} from "./actions";
import {createStore, applyMiddleware  } from 'redux';
import thunk  from 'redux-thunk';

//import { connect } from "react-redux";
//import { bindActionCreators } from "redux";


const store = createStore(reducer, applyMiddleware(thunk));

 class ReduxEx extends Component{
   
        state = {
            store: store.getState()
        };
        
        hello = store.subscribe(() => this.setState({store: store.getState()}));
      

        changeText = () => {
        store.dispatch(changeText("Mamikonyan"))
    }
    increment = () => {
        store.dispatch(incrementNumber())
    
    }
    decrement = () => {
        store.dispatch(decrementNumber())
    }
    reset = () => {
        store.dispatch(resetNumber())
    }

    render(){
      const state = store.getState();
       //console.log(state, "state", store, "store", store.getState(), "get state")
        return(
           <div>
                <p>{state.changeName}</p>
                <button onClick={this.changeText}>Change text</button>
                <p></p>
                <p>{state.counter}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset number</button>
           </div>
        );
    }
}
export default ReduxEx;
