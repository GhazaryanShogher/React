import React, { Component } from 'react';
import reducer from "./reducers";
import {changeText, incrementNumber, decrementNumber} from "./actions";
import {createStore, applyMiddleware  } from 'redux';
import thunk  from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));



 class ReduxEx extends Component{
    constructor(props){
        super(props);
        this.state = {
            changeName:store.getState().changeName
        };
        store.subscribe(() => this.setState({changeName: store.getState().changeName}));
    }
    changeText = () => {
        store.dispatch(changeText("Mamikonyan"))
    }
    render(){
       const state = store.getState();
       console.log(state, "state", store, "store", store.getState(), "get state")
        return(
           <div>
                <p>{this.state.changeName}</p>
                <button onClick={this.changeText}>Change text</button>
           </div>
        );
    }
}
export default ReduxEx;