// Resume.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Resume.css';
import { FaBriefcase, FaGlobeAmericas } from 'react-icons/fa';
import EdsonMountain from '../../assets/Edson_Moutain.jpeg';
import Leepic from '../../assets/Leepic.png';
import SinglePic from '../../assets/SinglePic.png';

const ResumeSection = () => {
  const timeline = [
    {
      date: 'August 2021',
      event: 'Enrolled in Notre Dame CS'
    },
    {
      date: 'May 2022',
      event: 'Introduced to Python and Matlab'
    },
    {
      date: 'August 2022',
      event: 'Introduced to C and C++'
    },
    {
      date: 'December 2022',
      event: 'Completed Graphics and System Management project in C'
    },
    {
      date: 'May 2023',
      event: 'Won Hackathon and deeper dive in Software Engineering'
    },
    {
      date: 'June 2023',
      event: 'IBM Program and Cybersecurity Internship'
    },
    {
      date: 'August 2023',
      event: 'Working on TRiBE startup'
    },
    {
      date: 'August 2023',
      event: 'Started Pantry Pal'
    },
    // Add as many events as you need here
  ];

  return (
    <div className="resume-section">

      {/* Timeline Section */}
      <div className="resume-block timeline">
        <FaBriefcase className="icon timeline-icon" />
        <h2>My Journey in CS</h2>
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.date}</h3>
            <p>{item.event}</p>
          </div>
        ))}
      </div>

      {/* Travel Section */}
      <div className="resume-block travel">
        <FaGlobeAmericas className="icon travel-icon" />
        <h2>Travel</h2>
        <Carousel>
          <div>
            <img src={EdsonMountain} alt="Edson Mountain View" />
          </div>
          <div>
            <img src={Leepic} alt="Lee in Action" />
          </div>
          <div>
            <img src={SinglePic} alt="Scenic Landscape" />
          </div>
        </Carousel>
      </div>

    </div>
  );
};

export default ResumeSection;
