import React, { useState } from 'react';
import { AiOutlineInfo  } from "react-icons/ai";
import { BsArrowsCollapse } from "react-icons/bs";


const SingleProject = ({projectTitle, technologies, info}) => {

  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="eachProjectDiv">
        <div className="toggler">
          <h3>{projectTitle}</h3>
          <button onClick={clickHandler}>{toggle? <BsArrowsCollapse/> : <AiOutlineInfo/>}</button>
        </div>
        {toggle && <><h4>{technologies}</h4>
          <p>{info}</p></>}
      </div>
    </>
  )
}

export default SingleProject
