// src/components/MainContent.js
import React from 'react';
import './work.css';
import Cards from '../Cards/cards';

const Work = () => {
    // Example array of projects
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
        <div className="work">
            <h1>Work</h1>
            <Cards projects={projects}/>
        </div>
    );
}

export default Work;
