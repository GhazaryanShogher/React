import React, { Component, Fragment } from 'react';
class Count extends Component{
  state = {
      count: 0
  }
  componentDidMount(){
      this.time = setInterval(() => this.addCount(), 1000)
  }
  addCount = () => {
      this.setState({
          count: this.state.count + 1
      })
  }

  componentDidUpdate(prevProps,previousState){
      if(previousState.count !== 5){
          console.log("hi")
      }
  }
  

  componentWillMount(){
      clearInterval(this.time);
  }
  
  render() {
      return (
          <Fragment>
              <h1> Result</h1>
              <p> the count is {this.state.count}</p>
          </Fragment>

      );
  }
}

export default Count;
