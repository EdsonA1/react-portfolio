import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            <h1 className='logo'>EDSON.A</h1>
            <div className={`nav ${isOpen ? 'open' : ''}`}>
                <div className="menuItems">
                    <a href="resume.html" className="resume">Work</a>
                    <a href="about.html" className="about">About</a>
                    <a href="profile.html" className="profile">Resume</a>
                    <a href="contact.html" className="contact">Contact</a>
                </div>
            </div>
            <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className="burger" />
        </div>
    );
}

export default Header;






