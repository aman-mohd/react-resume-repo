import React from 'react'
import "./MiniProjDiv.css"

const MiniProjects = ({data}) => {
  return <> 
    <h3>Mini Projects:</h3> 
    {
    data.map(
      (mini) => 
        <div key={mini.id} className="mini_proj_div">
          <h4>{mini.projectTitle}</h4>
          <p>{mini.info}</p>
        </div>
      ) 
    }  
  </>
}

export default MiniProjects
