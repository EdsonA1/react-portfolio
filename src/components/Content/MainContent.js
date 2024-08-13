import React from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll
import './MainContent.css';
import WaveBitmoji from '../../assets/Wave_Bitmoji.png'; 
import { Typewriter } from 'react-simple-typewriter';

const MainContent = () => {
  return (
    <div id="about" className="content-container"> {/* Adding id here */}
      <div className="bitmoji-container">
        <img src={WaveBitmoji} alt="Wave Bitmoji" className="bitmoji" />
      </div>
      <div className="main-content">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Hi, I'm <span className="name-highlight">Edson A.</span>
        </h2>
        <p className="mt-4 text-gray-500">
          <Typewriter
            cursor
            cursorBlinking
            cursorColor="black"
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              'Student',
              'Developer',
              'Entrepreneur',
              'Traveler'
            ]}
          />
        </p>
        <div className="button-container">
          <span className="sayhi">Say Hi <span className="wave">👋🏾</span></span>
          <Link to="projects" smooth={true} duration={500} className="viewwork">View My Work</Link> {/* Updated to use smooth scrolling */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
