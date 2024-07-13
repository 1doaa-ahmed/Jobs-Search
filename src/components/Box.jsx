import React from "react";
import "../styles/Box.css";

function Box({ children, onMouseEnter, onMouseLeave,setDisplayJobs ,jobs }) {
  
  function handleOnClick(){
    const startIndex = ((children) - 1) * 5;
    const endIndex = startIndex + 5 ;
    setDisplayJobs(jobs.slice(startIndex,endIndex))
    
  }
  return (
    <button
      className="Box"
      onClick={handleOnClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

export default Box;
