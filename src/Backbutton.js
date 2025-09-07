import React from 'react';
import { Link } from 'react-router-dom';
import './Backbutton.css';

const BackButton = () => {
  return (
    <Link to="/" className="back-button">
      &larr; Back to Invitation
    </Link>
  );
};

export default BackButton;