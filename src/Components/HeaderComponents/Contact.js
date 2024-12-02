import React from 'react';
import Contactcss from '../../CSSFolder/HeaderCSS/Contact.css' // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-description">
        We would love to hear from you! Whether you're interested in collaboration, learning opportunities, or job offers,
        feel free to reach out to us. Let's connect and explore new opportunities together!
      </p>

      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>Email: <strong>balavikash6@gmail.com</strong></p>
      </div>

      <div className="contact-footer">
        <p>&copy; 2024 Vikash. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
