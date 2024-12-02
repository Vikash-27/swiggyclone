import React from 'react';
import AboutCSS from '../../CSSFolder/HeaderCSS/About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to Foodie Express</h1>
      <p className="about-description">
        Foodie Express is a food delivery app inspired by Swiggy, created with love by <strong>Vikash</strong>.
        <br />
        We bring your favorite dishes from local restaurants straight to your doorstep with a simple click.
        <br />
        Experience a fast, reliable, and convenient food delivery service that ensures quality, freshness, and satisfaction.
      </p>
      <div className="about-footer">
        <p>&copy; 2024 Vikash. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
