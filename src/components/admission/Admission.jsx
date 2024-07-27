
import './Admission.css';

import React from 'react';

const Admission = () => {
  return (
    <div className="admission p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Admissions</h1>
      
      <section className="admission-process mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admission Process</h2>
        <p className="text-gray-600">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      </section>
      
      <section className="admission-criteria mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admission Criteria</h2>
        <p className="text-gray-600">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      </section>
      
      <section className="important-dates mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Important Dates</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li className="mb-2"><strong>Admission Form Availability:</strong> March 1st</li>
          <li className="mb-2"><strong>Last Date for Submission:</strong> March 31st</li>
          <li className="mb-2"><strong>Entrance Test:</strong> April 15th</li>
          <li className="mb-2"><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </section>
      
      <section className="admission-forms">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Download Admission Forms</h2>
        <a href="/admission-form.pdf" download className="text-blue-500 hover:text-blue-700">Download Admission Form</a>
      </section>
    </div>
  );
};

export default Admission;
