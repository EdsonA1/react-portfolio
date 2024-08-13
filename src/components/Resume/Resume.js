import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-6xl mx-auto p-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">My Experience</h2>
      
      {/* Pill-shaped toggle button */}
      <div className="flex justify-center space-x-6 mb-12">
        <button
          className={`py-3 px-8 text-lg rounded-full focus:outline-none ${activeTab === 'work' ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => handleTabClick('work')}
        >
          Work
        </button>
        <button
          className={`py-3 px-8 text-lg rounded-full focus:outline-none ${activeTab === 'education' ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => handleTabClick('education')}
        >
          Education
        </button>
      </div>
      
      {/* Work Experience */}
      {activeTab === 'work' && (
        <div className="space-y-10">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="flex space-x-6">
              <div className="w-1/4 text-lg text-gray-600">{exp.date}</div>
              <div className="w-3/4 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800">{exp.company} ({exp.location})</h3>
                <p className="text-xl text-gray-700 mt-2">{exp.role}</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Education */}
      {activeTab === 'education' && (
        <div className="space-y-10">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="flex space-x-6">
              <div className="w-1/4 text-lg text-gray-600">{edu.date}</div>
              <div className="w-3/4 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-xl text-gray-700 mt-2">{edu.degree}</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                  {edu.additionalInfo.map((info, idx) => (
                    <li key={idx}>{info}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
