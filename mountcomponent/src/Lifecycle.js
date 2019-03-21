import React, { Component } from 'react';

class Lifecycle extends Component{

    state = {
        value:0
    }
  
  componentDidMount(){
      setInterval(()=> this.setState({value : this.state.value + 1}), 1000)
  }


//   shouldComponentUpdate(nextProps, nextState){
      
//     console.log("shouldn e"); 
//       if(nextState.value == 4){
//         return true;
//       }
//       return false;         
//   }

getSnapshotBeforeUpdate (prevProps, prevState){
    if(prevState.value !== this.state.value){
        return prevState.value
    }
    return null;

}

  componentDidUpdate(prevProps, prevState, snapshot){
    //   if(prevProps.value !== this.state.value){
    //     console.log("didn e");
    //   }
    if(snapshot !== null){
        console.log(snapshot)
    } else {
        console.log("ayo null")
    }
      
  }
  render() {
      return (
          <div>{this.state.value}</div>
      );
  }
}

export default Lifecycle;
