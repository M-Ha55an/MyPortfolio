import React, { Component } from 'react';
import '../Styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section" id="footer">
        <div className="footer-content">
          <div className="footer-details">
            <h2>Hassaan's Portfolio</h2>
            <p>
              A modern full-stack web developer portfolio showcasing React skills, design,
              and intelligent automation ideas.
            </p>
          </div>

          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Hassaan. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
