import React, { Component } from 'react';
import {Fragment} from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
        <div className="second-part">
            <div className="item-second">
                <h2>THE ULTIMATE WEB PLATFORM FOR DEVELOPERS AND DESIGNERS</h2>
                <p>Famo.us is free, open source javaScript framework that help you create smooth, complex UIs for any screen</p>
                <div className="btns">
                    <button className="btn-first">Start learning</button>
                    <button className="btn-white">Download</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Section;
