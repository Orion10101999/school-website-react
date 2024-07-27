import React from 'react';
import Introduction from './Introduction';
import Carousel from './Carousel';
import QuickLinks from './QuickLinks';

const Home = () => {
  return (
    <div>
      <Introduction />
    
      <Carousel />
      <QuickLinks />
    </div>
  );
}

export default Home;
