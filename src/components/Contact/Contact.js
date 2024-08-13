import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioData } from '../../data/portfolio';

const Contact = () => {
  const { contactInfo } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto p-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">Contact Me</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 px-8 py-4 rounded-full shadow-lg flex items-center space-x-4 text-lg font-semibold text-gray-800 transform transition-transform hover:scale-105"
          >
            <FontAwesomeIcon icon={contact.icon} className="text-2xl" />
            <span>{contact.type}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
