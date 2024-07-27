import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="quick-links py-6">
      <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2">
        <li><Link to="/aboutus" className="text-blue-500 hover:underline">About Us</Link></li>
        <li><Link to="/" className="text-blue-500 hover:underline">Admissions</Link></li>
        <li><Link to="/academics" className="text-blue-500 hover:underline">Academics</Link></li>
        <li><Link to="/contactus" className="text-blue-500 hover:underline">Contact Us</Link></li>
      </ul>
    </div>
  );
}

export default QuickLinks;
