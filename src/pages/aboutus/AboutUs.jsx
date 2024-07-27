// AboutUs.js
import React from 'react';

import History from './History';
import Vision from './Vision';
import PrincipalMessage from './PrincipalMessage';
import Facilities from './Facilities';
import Misson from './Misson';

const AboutUs = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">About Us</h1>
      <History />
      <Vision />
      <Misson />
      <PrincipalMessage />
      <Facilities />
    </div>
  );
};

export default AboutUs;
