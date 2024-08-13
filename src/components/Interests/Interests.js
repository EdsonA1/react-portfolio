import React from 'react';
import { portfolioData } from '../../data/portfolio';

const Interests = () => {
  const { interests } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto p-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">My Interests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center text-2xl font-semibold text-gray-800 transform transition-transform hover:scale-105"
          >
            {interest.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
