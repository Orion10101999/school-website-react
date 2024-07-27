import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Student Life at Springdale</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-500">Extracurricular Activities</h2>
        <p className="text-gray-700">Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-500">Clubs and Societies</h2>
        <p className="text-gray-700">Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-500">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-indigo-500">Student Council</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Amy Parker, Grade 12 - President</li>
          <li>Rajiv Mehta, Grade 11 - Vice President</li>
          <li>Lisa Wong, Grade 10 - Secretary</li>
        </ul>
      </div>
    </div>
  );
};

export default Students;
