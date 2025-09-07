// src/Hero.js

import React from 'react';
import './Hero.css';
import farmImage from './lemos-farm.jpg'; // Import the image

const Hero = ({ name, age }) => {
  return (
    <header className="hero-container" style={{ backgroundImage: `url(${farmImage})` }}>
      <div className="hero-overlay">
        <h1>Advait </h1><h2 style={{ color: `white` }}>is turning 4 🚀</h2>
        <p>You're invited to a Barnyard Bash for {name}'s {age}th Birthday!</p>
      </div>
    </header>
  );
};

export default Hero;