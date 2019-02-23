import React, { Component } from 'react';
import famous_logo_white from './famous_logo_white.svg';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
    <nav>
        <img src={famous_logo_white} alt="φ" />
        <i className="fas fa-bars fa-2x" onclick="menu()"></i>
        <ul className="hide">
            <li>Famo.us University</li>
            <li>Demos</li>
            <li>Famo.us/Angular</li>
            <li>Help</li>
            <li>Blog</li>
        </ul>
        <button className="na">Download</button>
    </nav>
    );
  }
}

export default Nav;
