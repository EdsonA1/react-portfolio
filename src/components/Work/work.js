import React from 'react';
import Marquee from 'react-fast-marquee';
import Cards from '../Cards/cards';
import { portfolioData } from '../../data/portfolio';

const Work = () => {
  const { projects } = portfolioData;

  return (
    <div id="projects" className="max-w-screen-2xl mx-auto p-12 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-6">Some of my projects...</h2>
      <p className="text-xl text-gray-600 mb-10">Here is a selection of projects that I've worked on, showcasing my skills and experience.</p>
      <Marquee gradient={false} speed={50} pauseOnHover={true} className="w-full">
        {projects.map((project, index) => (
          <div key={index} className="mx-6">
            <Cards
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Work;
