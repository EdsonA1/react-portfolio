import React from 'react';
import './work.css';
import Cards from '../Cards/cards';

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
    ];

    return (
        <div id="work" className="work">
            <h2 className="work-title">Work</h2>
            <p className="work-desc">Below, you can explore a selection of my projects...</p>
            <div className="cards-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <Cards
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
