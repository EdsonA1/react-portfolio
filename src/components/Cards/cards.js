// ProjectCard.js
import React from 'react';
import './cards.css'; // Make sure to create and import the CSS file

const Cards = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
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
