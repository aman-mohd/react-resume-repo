import React from 'react'
import Data from '../ResumeData';
import "./ProjectTab.css";
import { Link } from 'react-router-dom';



const Projects = () => {
  const { projects } = Data;
  const readyProject = projects.filter(proj => (proj.id == 2))
  return (
    <div className="proj_thumbnail_container">
      {readyProject.map((proj) => {
        return (
          <div className="proj_thumbnail" key={proj.id}>
            <Link style={{ textDecoration: "none" }} to={proj.path}>
              <div className="each_proj_thum">
                <img src={proj.img} alt="" />
                <h3>{proj.projectTitle}</h3>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
