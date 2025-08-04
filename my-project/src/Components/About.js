import React, { Component } from 'react';
import "../Styles/About.css";
import ProfileImg from '../Images/about.png';

export default class About extends Component {
  render() {
    return (
      <>
        <section className="about" id="about">
              <h1>About Me</h1>
          <div className="about-container">
            <div className="about-text">
              <p>
                Hi! I’m <strong>Hassaan</strong>, a full-stack web developer passionate about building responsive, user-friendly websites using <strong>React.js</strong> and exploring <strong>AI</strong> in web development.
              </p>

              <p>
                I have experience in both frontend and backend technologies, focusing on clean design, reusable components, and smooth user experiences. I also enjoy working on automation and creative projects that make a difference.
              </p>

              <p>
                Outside of coding, I explore new tech, watch cricket, and brainstorm AI-driven ideas.
              </p>
            </div>
            <div className="about-image">
              <img src={ProfileImg} alt="Hassaan" />
            </div>
          </div>
        </section>
      </>
    )
  }
}
