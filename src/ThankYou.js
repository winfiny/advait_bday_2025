import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';
import joesAreaImage from './joe-area.jpg'; // We'll add this image

const ThankYou = () => {
  return (
    <main className="thank-you-main">
      <div className="card thank-you-card">
        <h3>Thank You!</h3>
        <p className="subtitle">Your response has been recorded.</p>
        <Link to="/" className="home-button">
          &larr; Back to Invitation
        </Link>
      </div>

      <div className="card farm-info-card">
        <h2>Get Ready for Fun at Lemos Farm!</h2>
        <p className="farm-intro">
          Lemos Farm is a wonderful place for a party! It's designed to be fun for everyone, with tons of activities for kids and a relaxing, fun atmosphere for adults.
        </p>

        <div className="info-section">
          <h3>Your Party Area: Joe's Picnic Area</h3>
          <img src={joesAreaImage} alt="Joe's Picnic Area at Lemos Farm" className="farm-image" />
          <p>
            We'll have our own private spot at "Joe's Area," which includes picnic tables and a BBQ. It's the perfect home base for our day of farm adventures!
          </p>
        </div>

        <div className="info-section video-section">
          <h3>How to Reach the Party Area</h3>
          <p>Check out this video to see the path from the entrance:</p>
          <video width="100%" controls>
            <source src="/lemos-farm-tour.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="info-section">
          <h3>Unlimited Activities Included</h3>
          <p>
            Your invitation includes unlimited access to all the best attractions at the farm. Get ready for:
          </p>
          <ul className="activities-list">
            <li>🐴 Pony Rides</li>
            <li>🚂 Train Rides</li>
            <li>🐐 Petting Zoo</li>
            <li>🚜 Hay Rides</li>
            <li>🏰 Barn Jumpers</li>
            <li>👻 Haunted House (the fun, kid-friendly version!)</li>
          </ul>
          <p>
            Adults are welcome to join in on the train rides, hay rides, and petting zoo fun!
          </p>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;