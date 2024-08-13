import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/Main_Logo.png';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="bg-white shadow-lg rounded-b-xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="top" smooth={true} duration={500}>
            <img
              src={logo}
              alt="Main Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-800 font-semibold text-xl cursor-pointer transition-transform transform hover:scale-105"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-800 font-semibold text-xl cursor-pointer transition-transform transform hover:scale-105"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-gray-800 font-semibold text-xl cursor-pointer transition-transform transform hover:scale-105"
          >
            Experience
          </Link>
          <Link
            to="interests"
            smooth={true}
            duration={500}
            className="text-gray-800 font-semibold text-xl cursor-pointer transition-transform transform hover:scale-105"
          >
            Interests
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-800 font-semibold text-xl cursor-pointer transition-transform transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleNav}
        >
          {isNavVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div className="space-y-1.5">
              <span className="block w-8 h-1 bg-gray-800"></span>
              <span className="block w-8 h-1 bg-gray-800"></span>
              <span className="block w-8 h-1 bg-gray-800"></span>
            </div>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isNavVisible && (
          <nav className="lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out z-50">
            <button
              className="absolute top-6 right-6 text-gray-700 focus:outline-none"
              onClick={toggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-800 font-semibold text-3xl mb-8 cursor-pointer transition-transform transform hover:scale-105"
              onClick={toggleNav}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-800 font-semibold text-3xl mb-8 cursor-pointer transition-transform transform hover:scale-105"
              onClick={toggleNav}
            >
              Projects
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-gray-800 font-semibold text-3xl mb-8 cursor-pointer transition-transform transform hover:scale-105"
              onClick={toggleNav}
            >
              Experience
            </Link>
            <Link
              to="interests"
              smooth={true}
              duration={500}
              className="text-gray-800 font-semibold text-3xl mb-8 cursor-pointer transition-transform transform hover:scale-105"
              onClick={toggleNav}
            >
              Interests
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-800 font-semibold text-3xl mb-8 cursor-pointer transition-transform transform hover:scale-105"
              onClick={toggleNav}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
