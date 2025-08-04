import React, { Component } from 'react';
import '../Styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <section className="home-section" id="home">
        <div className="hover-container">
          <div className="hover-box box-1">
            <h2>About Me</h2>
            <p>I’m a React developer with a passion for clean code and modern web design.</p>
          </div>
          <div className="hover-box box-2">
            <h2>My Services</h2>
            <p>I build responsive web apps, automate tasks, and design smooth UI/UX layouts.</p>
          </div>
        </div>
      </section>
    );
  }
}
