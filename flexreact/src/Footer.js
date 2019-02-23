import React, { Component } from 'react';
import {Fragment} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="links">
                <a href="#">Branding</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Jobs</a>
                <a href="#">© Famous Industries, Inc. 2014</a>
            </div>
            <div className="subscribe">
                <form className="subscribe" action="/">
                    <input type="email" name="EMAIL" placeholder="Email Address" />
                    <button>Get Updates</button>
                </form>
            </div>
        </footer>    
    );
  }
}
export default Footer;