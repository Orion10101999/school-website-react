// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We'd love to hear from you! If you have any questions or feedback, please fill out the form below.
      </p>
      <form className="bg-white shadow-md rounded p-6">
        <label className="block mb-4">
          <span className="text-gray-800">Name</span>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Name"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-800">Email</span>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Email"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-800">Message</span>
          <textarea
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Message"
          />
        </label>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
