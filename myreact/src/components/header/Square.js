import React, {Component} from 'react';
import './Square.css'; 

class Square extends Component{

    state ={
        counter:0,
        bgColor:"green"
    }
    clickHendler = () => {
        this.setState(
            {

                counter:this.state.counter +=1,
                bgColor:"red"
            }
            )

    }

    render(){
        return(
            <div  title="name" className="changeColor" style={{backgroundColor:this.state.bgColor}} onClick={this.clickHendler}>{this.state.counter}</div>
        
        );
    }
}

export default Square;