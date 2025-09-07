import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Rsvp from './Rsvp';

function App() {
  const partyDetails = {
    childsName: "Leo",
    age: "4",
    date: "Saturday, October 25, 2025",
    time: "11:00 AM - 2:00 PM",
    locationName: "Lemos Farm",
    locationAddress: "12320 San Mateo Rd, Half Moon Bay, CA 94019",
    rsvpDate: "October 15th",
    rsvpContact: "mom-or-dad@email.com"
  };

  return (
    // BrowserRouter must be the top-level component
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home partyDetails={partyDetails} />} />
          <Route path="/rsvp" element={<Rsvp partyDetails={partyDetails}/>} />
        </Routes>
        <footer>
          <p>We can't wait to celebrate with you!</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;