import React from 'react';
import Header from './Header/Header';
import MainContent from './Content/MainContent';
import Work from './Work/Work';
import Interests from './Interests/Interests';
import Gallery from './Gallery/Gallery';
import Experience from './Resume/Resume';
import Contact from './Contact/Contact';
import Footer from "./Footer/Footer";
import '../index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* Add top padding to avoid overlap */}
      <div className="pt-20">
        <section id="about">
          <MainContent />
        </section>
        <section id="projects">
          <Work />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="interests">
          <Interests />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
