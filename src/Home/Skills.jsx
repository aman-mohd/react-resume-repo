import React from 'react'
import './Skills.css'

const Skills = ({data}) => {
  return <>
        <h3>Skills:</h3>
      {
        data.map(
          (skill, index) => <div key={index} className="skills_div">
            {skill}
            </div>
        )
      }
  </>  
}

export default Skills
