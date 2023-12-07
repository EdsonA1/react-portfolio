import React, { useState } from 'react';
import './Header.css'; // Make sure this points to your CSS file
import logo from '../../assets/Main_Logo.png'; // Update the path as needed
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ensure you have these icons imported

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the visibility of the nav menu
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Main Logo" className="logo" />
        {/* Hamburger menu icon */}
        <button className={`nav-toggle ${isNavVisible ? 'open' : ''}`} onClick={toggleNav}>
          <div className="hamburger-menu">
            <div></div> {/* These divs serve as the lines of the hamburger icon */}
            <div></div>
            <div></div>
          </div>
        </button>
        {/* Navigation links */}
        <nav className={`nav ${isNavVisible ? 'nav-visible' : ''}`}>
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* Social icons */}
        <div className="icon-group">
          <a href="https://github.com/yourusername" aria-label="Github"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
