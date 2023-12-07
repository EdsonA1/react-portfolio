// Work.js
import React from 'react';
import './work.css';

const Work = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description for Project One.',
            image: 'path_to_image_here',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description for Project Two.',
            image: 'path_to_image_here',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description for Project Three.',
            image: 'path_to_image_here',
            link: '#'
        },
        {
            title: 'Project Four',
            description: 'Description for Project Four.',
            image: 'path_to_image_here',
            link: '#'
        },
        {
            title: 'Project Five',
            description: 'Description for Project Five.',
            image: 'path_to_image_here',
            link: '#'
        },
        {
            title: 'Project Six',
            description: 'Description for Project Six.',
            image: 'path_to_image_here',
            link: '#'
        },
        // Add as many projects as you need here
    ];

    return (
        <div id="work" className="work">
          <h2 className="work-title">Work</h2>
          <div className="cards-container">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
export default Work;
