import React from 'react'
import "./Projects.css"
import SingleProject from './SingleProject';

const Projects = ({ data: { projects } }) => {
  return ( 
  <>
    {
      projects.map((proj) => {
        return <SingleProject key={proj.id} {...proj} />;
      })
    }
  </>
)}

export default Projects
