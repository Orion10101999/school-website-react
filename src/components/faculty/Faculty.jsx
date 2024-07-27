import React from 'react';
import './Faculty.css';
const Faculty = () => {
    const facultyData = [
        { name: 'John Doe', position: 'Principal', qualification: 'M.Ed', experience: '20 years' },
        { name: 'Jane Smith', position: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years' },
        { name: 'Emily Johnson', position: 'English Teacher', qualification: 'M.A. in English', experience: '10 years' },
        { name: 'Michael Brown', position: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years' },
        { name: 'Sophia Davis', position: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years' },
        { name: 'David Wilson', position: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years' }
    ];

    return (
        <div className="faculty p-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Faculty</h2>
            <div className="faculty-list flex flex-wrap justify-center">
                {facultyData.map((member, index) => (
                    <div key={index} className="faculty-member border p-4 m-4 w-60 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                        <p className="text-lg text-green-600">{member.position}</p>
                        <p className="text-md text-purple-600">Qualification: {member.qualification}</p>
                        <p className="text-md text-red-600">Experience: {member.experience}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faculty;
