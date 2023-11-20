import React from 'react';
import './Resume.css';
import { FaBriefcase, FaProjectDiagram, FaGlobeAmericas } from 'react-icons/fa';
import EdsonMountain from '../../assets/Edson_Moutain.jpeg';
import Leepic from '../../assets/Leepic.png';
import SinglePic from '../../assets/SinglePic.png';

const ResumeSection = () => {
  return (
    <div className="resume-section">

      {/* Experience Section */}
      <div className="resume-block experience">
        <FaBriefcase className="icon" />
        <div>
          <h2>Experience</h2>
          <div className="experience-detail">
            <h3>Plante Moran (Chicago, IL) - Cybersecurity Track Intern</h3>
            <p>June 2023 – August 2023</p>
            <ul>
              <li>Conducted cybersecurity assessments for diverse companies, evaluating business process controls and information technology general controls using frameworks including SOX, SOC, HITRUST, and PCI.</li>
              <li>Developed documentation for controls, prepared compliance reports, and assisted in mitigating internal and external risks associated with personal identifiable information and information assets.</li>
            </ul>
          </div>
          <div className="experience-detail">
            <h3>Office of Information Technology (Notre Dame, IN) - Help Desk Computer Consultant</h3>
            <p>August 2022 – Present</p>
            <ul>
              <li>Diagnose and resolve problems that individuals may have with network connectivity, Windows and Macintosh Operating systems, iOS, and Android devices as well as a variety of applications.</li>
              <li>Prepare audio/visual equipment for faculty, staff, and students following specific procedures.</li>
            </ul>
          </div>
          <div className="experience-detail">
            <h3>Idea Center (Notre Dame, IN) - Technical Market Analyst</h3>
            <p>August 2022 – May 2023</p>
            <ul>
              <li>Analyze new inventions and technology startups with a Total Addressable Market up to $500M.</li>
              <li>Evaluate the market and key statistics to predict future market performance.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Projects Section */}
      <div className="resume-block projects">
        <FaProjectDiagram className="icon" />
        <div>
          <h2>Technical Projects</h2>
          <div className="project-detail">
            <h3>Edsonaugustin.com | Portfolio website</h3>
            <p>Built and deployed using HTML, CSS, JavaScript. Maintains an up-to-date online platform to allow easier access to my professional interest and side projects.</p>
          </div>
          <div className="project-detail">
            <h3>TRiBE | Hackathon Winner Project</h3>
            <p>Co-developed a full-stack web application that achieved first place in a competition against 15 other teams. Designed and integrated four interactive features and a user authentication system using JavaScript, ReactJS, CSS, and Python. Platform access is restricted exclusively to users with a verified .edu email address.</p>
            <a href="https://hackathon.library.nd.edu/" target="_blank" rel="noopener noreferrer">View Hackathon Project</a>
          </div>
        </div>
      </div>

      {/* Travel Section */}
      <div className="resume-block travel">
        <FaGlobeAmericas className="icon" />
        <div>
          <h2>Travel</h2>
          <div className="travel-images">
          <img src={EdsonMountain} alt="Edson Mountain View" />
          <img src={Leepic} alt="Lee in Action" />
          <img src={SinglePic} alt="Scenic Landscape" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ResumeSection;
