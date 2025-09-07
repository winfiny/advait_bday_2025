import React from 'react';
import './Details.css';
import { Link } from 'react-router-dom'; // Import Link

const Details = ({ details }) => {
  return (
    <section className="card details-card">
      <h2>Join us for farm-tastic fun with Advait 🐮</h2>
      
      <div className="info-grid">
        <div className="info-item">
          <h3>When</h3>
          <p>{details.date}</p>
          <p>{details.time}</p>
        </div>
        <div className="info-item">
          <h3>Where</h3>
          <p>{details.locationName}</p>
          <p>{details.locationAddress}</p>
          <a 
            href="https://maps.google.com/?q=Lemos+Farm+12320+San+Mateo+Rd+Half+Moon+Bay+CA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            Get Directions
          </a>
        </div>
      </div>
      
      <div className="rsvp-section-in-details">

        {/* --- THIS IS THE UPDATED BUTTON --- */}
        <Link to="/rsvp" className="rsvp-button">
        💌 RSVP
        </Link>
        

      </div>
    </section>
  );
};

export default Details;