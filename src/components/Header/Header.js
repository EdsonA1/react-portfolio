import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            <h1 className='logo'>EDSON.A</h1>
            <div className={`nav ${isOpen ? 'open' : ''}`}>
                <div className="menuItems">
                    <a href="resume.html" className="resume">Resume</a>
                    <a href="about.html" className="about">About</a>
                    <a href="profile.html" className="profile">Profile</a>
                    <a href="contact.html" className="contact">Contact</a>
                </div>
            </div>
            <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className="burger" />
        </div>
    );
}

export default Header;






