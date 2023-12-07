// Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-links">
        {/* Social Media Icons */}
        <a href="https://github.com/YourGithubUsername" target="_blank" rel="noopener noreferrer" className="social-link github">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/YourLinkedInUsername" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:YourEmail@example.com" target="_blank" rel="noopener noreferrer" className="social-link email">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="YourResume.pdf" target="_blank" rel="noopener noreferrer" className="social-link resume">
          <i className="fas fa-file"></i> Resume
        </a>
      </div>
      <p className="footer-quote">"In a world of 0s and 1s, be the change that compiles positive impact."</p>
      <div className="footer-bottom-text">
        © {new Date().getFullYear()} Edson Augustin. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
