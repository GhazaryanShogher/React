import React, {Component, Fragment} from "react";

class Button extends Component{

    
    render () {
        return (
            <Fragment>
                <button onClick = {this.props.click}>{this.props.name}</button>
            </Fragment>
        );

    }
}
export default Button;