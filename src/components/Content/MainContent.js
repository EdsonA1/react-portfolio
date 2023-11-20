import React from 'react';
import './MainContent.css';
import ProfilePic from '../../assets/SinglePic.png'; // Adjust the path as necessary

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="profile-container">
        <img src={ProfilePic} alt="Edson Augustin" className="profile-pic" />
      </div>
      <div className="text-content">
        <h2>Hi, I'm <strong>Edson.A</strong></h2>
        <p>Computer Science, Real Estate, Engineering Corporate Practice</p>
        <p>@University of Notre Dame</p>
      </div>
      <div className="home__img">
        <svg className="home__blob" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <mask id="mask0" maskType="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image className="home__blob-img" x="100" y="50" width="300" height="300" href={require('../../assets/blob.svg').default} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default MainContent;
