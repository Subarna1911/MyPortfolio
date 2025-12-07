import React from 'react'
import Quotation from '../components/Quotation';
import Home from '../pages/Home'
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Body = () => {
  return (
    <div className="max-w-screen w-full">
        <Home className="spacing"/>
      <Quotation/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default Body
