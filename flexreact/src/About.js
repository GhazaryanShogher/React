import React, { Component } from 'react';
import {Fragment} from 'react';
import bullhorn from './bullhorn.svg';
import wrench from './wrench.svg';
import university_hat from './university_hat.svg';
import './About.css';

class About extends Component {
  render() {
    return (
    <div className="about">
        <div className="with-icon">
            <img src={ bullhorn } alt="" />
            <hr />
            <h3>What is Famo.us?</h3>
            <p>Famo.us is the only JavaScript framework that includes an open source 3D layout engine fully integrated with a 3D physics animation engine that can render to DOM, Canvas, or WebGL.</p>
        </div>
        <div className="with-icon">
            <img src={ wrench } alt=""  className="wrench" />
            <hr />
            <h3>Build your career</h3>
            <p>Choosing a development platform is more than just a technical decision—it's a career decision. Whether you're a seasoned developer expanding your skills, a designer looking to bring your ideas to life, or just learning to code, we're building Famo.us for you.</p>
        </div>
        <div className="with-icon">
            <img src={ university_hat } alt="" />
            <hr />
            <h3>Never stop learning</h3>
            <p>Getting started is easy. Famo.us University will teach you to code in Famo.us with lessons, live code examples, and real app projects. And the Famo.us community is always here when you need help.</p>
        </div>
    </div>
    );
  }
}

export default About;
