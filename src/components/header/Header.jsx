import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4">
            <h1 className="text-center text-yellow-500 font-semibold text-3xl mb-5" >Springdale Public School</h1>
            <nav className="flex justify-around">
                <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
                <Link to="/" className="text-white hover:text-gray-300">Admission</Link>
                <Link to="/aboutus" className="text-white hover:text-gray-300">About Us</Link>
                <Link to="/academics" className="text-white hover:text-gray-300">Academics</Link>
                <Link to="/faculty" className="text-white hover:text-gray-300">Faculty</Link>
                <Link to="/students" className="text-white hover:text-gray-300">Students</Link>
                <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
                <Link to="/contactus" className="text-white hover:text-gray-300">Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;
