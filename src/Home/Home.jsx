import React from 'react'
import Header from './Header'
import "./Home.css";
import Data from '../ResumeData';
import Projects from './Projects';
import Skills from './Skills';
import MiniProjects from './MiniProjects';
import Education from './Education';

const Home = () => {
  return (
    <div className="container">
      <div className="page">
        <Header data={Data}/>
        <div className="in_page_section">
          <div className="main_col">
            <h1>Projects:</h1>
            <Projects data={Data}/>
          </div>
          <div className="side_col">
            <Skills data={Data.skills}/>
            <MiniProjects data={Data.miniProjects}/>
            <Education data={Data.education}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
