import React from 'react';
import './ContactSection.scss';
import a from "../images/1.jfif";

const ContactSection = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">

        <div className="contact-left">
          <h2 className="section-title">Contact</h2>
          <img
            src={a}
            alt="Campus"
            className="contact-image"
          />
          <div className="contact-info">
            <p><strong>Email</strong><br />dd@gmail.com</p>
            <p><strong>Phone</strong><br />1234567890</p>
          </div>
        </div>

        <div className="contact-right">
          <h2>Get in Touch</h2>
          <p>Find out more about what we’re building in Madison and beyond.</p>
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            
            <input type="hidden" name="access_key" value="876c2fef-2e46-4a23-86a9-b540e3dae790" />

            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />             
            </div>          
            <textarea name="message" placeholder="How can we help you?" required></textarea>
            <button className="contact-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
 