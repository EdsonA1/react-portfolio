import React from 'react';
import './cards.css'; // Ensure this path is correct

const Cards = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-image-container" style={{ backgroundImage: `url(${image})` }}>
        {/* Image is now a background */}
        <div className="project-title-overlay">{title}</div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} className="project-link">More Info</a>
      </div>
    </div>
  );
};

export default Cards;
