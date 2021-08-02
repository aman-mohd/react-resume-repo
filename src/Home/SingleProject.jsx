import React, { useState, useEffect } from 'react';

import { MdKeyboardArrowRight } from "react-icons/md";



const SingleProject = ({id, projectTitle, technologies, info}) => {

  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    if (id == 1) {
      setTimeout(()=>{setToggle(!toggle)},2000);
    }
  }, [])

  return (
    <>
      <div onClick={clickHandler} className={toggle?"eachProjectDivActive":"eachProjectDiv"}>
        <div className="toggler">
          <h3>{projectTitle}</h3>
          <button className={toggle?"accord_btn":"accord_btn_active"}><MdKeyboardArrowRight/></button>
        </div>

        <h4>{technologies}</h4>
        <p>{info}</p>
      </div>
    </>
  )
}

export default SingleProject
