import React from 'react'
import "./Education.css"

const Education = ({ data }) => {
  return <>
    <h3>Education:</h3>
    {
      data.map(
        (edu) =>
          <div key={edu.id} className="education_div">
            <h4>{edu.college}</h4>
            <div className="degreeNyear">
              <p>{edu.degree}</p>
              <small>{edu.year}</small>
            </div>

          </div>
      )
    }
  </>
}

export default Education
