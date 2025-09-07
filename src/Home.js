import React from 'react';
import Hero from './Hero';
import Details from './Details';

import GiftInfo from './GiftInfo';

// This component now holds the main invitation page content
const Home = ({ partyDetails }) => {
  return (
    <>
      <Hero name={partyDetails.childsName} age={partyDetails.age} />
      <main>
        {/* --- THIS IS THE LINE TO FIX --- */}
        {/* Ensure you are passing partyDetails to the details prop */}
        <Details details={partyDetails} />
        

        <GiftInfo />
      </main>
    </>
  );
};

export default Home;