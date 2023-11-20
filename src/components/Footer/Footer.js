import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-links">
        {/* Social Media Icons */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
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
