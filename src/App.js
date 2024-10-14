import './App.css';

import React from 'react';
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
      <div id="content">
        <div id="home" className='flex justify-center pt-12 lg:pt-16 max-w-full'>
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
      </div>

      <div id="bottom">
        <Footer />
      </div>
    </>
  );
}

export default App;