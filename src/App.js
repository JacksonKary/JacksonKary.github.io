import './App.css';

import React from 'react';
import Header from './scenes/Header';
import Home from './scenes/Home';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Interest from './scenes/Interests';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import Divider from './components/Divider';

function App() {

  return (
    <>
      <div id="top" className='z-50'>
        <Header />
      </div>
      
      <div id="content">
        <div id="home" className='pt-16 sm:pt-24 flex justify-center max-w-full'>
          <Home />
        </div>
        <Divider />
        <div id="skills">
          <Skills />
        </div>
        <Divider />
        <div id="projects">
          <Projects />
        </div>
        <Divider />
        <div id="interests">
          <Interest />
        </div>
        <Divider />
        <div id="contact">
          <Contact />
        </div>
        <Divider />
      </div>

      <div id="bottom">
        <Footer />
      </div>
    </>
  );
}

export default App;