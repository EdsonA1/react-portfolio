import React from 'react';
import { Link } from 'react-router-dom'; // Import from react-router-dom if you're using it
import './MainContent.css';
import WaveBitmoji from '../../assets/Wave_Bitmoji.png'; // Make sure the path is correct

const MainContent = () => {
  return (
    <div className="content-container">
      <img src={WaveBitmoji} alt="Wave Bitmoji" className="bitmoji" />
      <div id="main-content" className="main-content">
        <h1>Hi, I'm <span className="name-highlight">Edson A.</span></h1>
        <p>Computer Science, Real Estate, and Engineering Corporate Practice <span className="name-highlight">@ University of Notre Dame.</span> Learning and exploring the <span className="gradient-text">possibilities of software development & startups.</span></p>
        <span className="sayhi">Say Hi <span className="wave">👋🏾</span></span>
        {/* Use Link component for internal navigation */}
        <a href="/work" className="viewwork">View My Work</a>
      </div>
    </div>
  );
};

export default MainContent;
