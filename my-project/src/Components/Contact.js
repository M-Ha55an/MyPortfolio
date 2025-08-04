import React, { Component } from 'react';
import '../Styles/Contact.css';
import ContactImg from '../Images/contact.png';
import axios from 'axios'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, subject, message } = this.state;

  axios.post('http://localhost:5000/api/contact', {
    name,
    email,
    subject,
    message
  })
  .then(response => {
    alert(response.data.message);
    // Optionally reset form
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  })
  .catch(error => {
    if (error.response && error.response.data && error.response.data.error) {
      alert(`Error: ${error.response.data.error}`);
    } else {
      alert('Something went wrong. Please try again.');
    }
    console.error('Submission error:', error);
  });
}


  render() {
    return (
      <section className="contact-section" id="contact">
        <h1>Contact Us</h1>
        <div className="contact-container">
          {/* Left: Image */}
          <div className="contact-image">
            <img src={ContactImg} alt="Contact" />
          </div>

          {/* Right: Form */}
          <form onSubmit={this.handleSubmit} className="contact-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name"
                value={this.state.name} onChange={this.handleChange}
                placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email"
                value={this.state.email} onChange={this.handleChange}
                placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject"
                value={this.state.subject} onChange={this.handleChange}
                placeholder="Enter subject" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message"
                value={this.state.message} onChange={this.handleChange}
                placeholder="Write your message here..." rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
}
