import React from 'react';

const Academics = () => {
  return (
    <div className="academics-section p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Academics</h2>
      <div className="curriculum mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Curriculum</h3>
        <div className="level mb-4">
          <h4 className="text-xl font-medium text-green-600">Primary (Grades 1-5)</h4>
          <ul className="list-disc list-inside ml-5">
            <li className="text-gray-700">English</li>
            <li className="text-gray-700">Mathematics</li>
            <li className="text-gray-700">Science</li>
            <li className="text-gray-700">Social Studies</li>
            <li className="text-gray-700">Art</li>
            <li className="text-gray-700">Physical Education</li>
          </ul>
        </div>
        <div className="level mb-4">
          <h4 className="text-xl font-medium text-green-600">Secondary (Grades 6-10)</h4>
          <ul className="list-disc list-inside ml-5">
            <li className="text-gray-700">English</li>
            <li className="text-gray-700">Mathematics</li>
            <li className="text-gray-700">Science (Physics, Chemistry, Biology)</li>
            <li className="text-gray-700">Social Studies</li>
            <li className="text-gray-700">Computer Science</li>
            <li className="text-gray-700">Physical Education</li>
            <li className="text-gray-700">Art</li>
          </ul>
        </div>
        <div className="level mb-4">
          <h4 className="text-xl font-medium text-green-600">Senior Secondary (Grades 11-12)</h4>
          <div className="stream mb-2">
            <h5 className="text-lg font-semibold text-orange-600">Science Stream</h5>
            <ul className="list-disc list-inside ml-5">
              <li className="text-gray-700">Physics</li>
              <li className="text-gray-700">Chemistry</li>
              <li className="text-gray-700">Biology</li>
              <li className="text-gray-700">Mathematics</li>
              <li className="text-gray-700">Computer Science</li>
              <li className="text-gray-700">English</li>
            </ul>
          </div>
          <div className="stream mb-2">
            <h5 className="text-lg font-semibold text-orange-600">Commerce Stream</h5>
            <ul className="list-disc list-inside ml-5">
              <li className="text-gray-700">Accountancy</li>
              <li className="text-gray-700">Business Studies</li>
              <li className="text-gray-700">Economics</li>
              <li className="text-gray-700">Mathematics</li>
              <li className="text-gray-700">English</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="methodologies mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Teaching Methodologies</h3>
        <p className="text-gray-700">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      </div>
      <div className="resources">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Educational Resources</h3>
        <p className="text-gray-700">Our educational resources include digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </div>
    </div>
  );
};

export default Academics;
