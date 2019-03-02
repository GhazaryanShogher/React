import React, {Component} from "react";
import Li from './Square';

class Header extends Component{
    state = {
        name: "Vardan"
    }
    showLi = () => {
        let arr = ["Hello", "Blog", "About", "Contacts"];
        let arr2 = [];
      for(let i = 0; i < arr.length; i++){
           arr2.push(<Li name={arr[i]}/>)
        } 
        return arr2;
    }
    render(){
        return(
            <header >
                <h1>{this.state.name}</h1>
            </header>
        );
    }
}
export default Header;