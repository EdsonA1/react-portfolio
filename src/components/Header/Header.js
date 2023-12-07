import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/Main_Logo.png'; // Main logo
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Icons

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Main Logo" className="logo" />
        <nav className={`nav ${isNavVisible ? 'nav-visible' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">Work</a>
          <a href="#projects">Resume</a>
          <a href="#projects">Contact</a>
        </nav>
        <div className="icon-group">
          <a href="https://github.com/yourusername"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /></a>
          {/* Add your school icon or link here */}
        </div>
        <button className={`nav-toggle ${isNavVisible ? 'open' : ''}`} onClick={() => setIsNavVisible(!isNavVisible)}>
          <div className="hamburger-menu"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
