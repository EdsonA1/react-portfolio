import React from 'react';
import Header from './Header/Header';
import MainContent from './Content/MainContent';
import Work from './Work/work';
import Resume from './Resume/Resume'
import Footer from "./Footer/Footer"
import '../App.css'

function App() {
  return (
    <div className='App'>
        <Header/>
        <MainContent/>
        <Work/>
        <Resume/>
        <Footer/>
    </div>
  );
}

export default App
