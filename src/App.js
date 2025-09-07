import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Rsvp from './Rsvp';
import ThankYou from './ThankYou';

function App() {
  const partyDetails = {
    childsName: "Advait",
    age: "4",
    date: "Sunday, September 14, 2025",
    time: "1:30 PM - 5:00 PM",
    locationName: "Lemos Farm, Joe's Picnic Area",
    locationAddress: "12320 San Mateo Rd, Half Moon Bay, CA 94019",
    rsvpDate: "September 12th",
    rsvpContact: "barone321@email.com"
  };

  return (
    // BrowserRouter must be the top-level component
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home partyDetails={partyDetails} />} />
          <Route path="/rsvp" element={<Rsvp partyDetails={partyDetails}/>} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <footer>
          <p>We can't wait to celebrate with you!</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;