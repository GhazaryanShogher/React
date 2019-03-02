import React, {Component} from "react";
import Header from "./header/Header";
import Content from "./content";

class Project extends Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Content /> 
            </div>
        );
    }
}

export default Project;