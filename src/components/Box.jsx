import React from "react";
import "../styles/Box.css";
function Box({
  children,
  onMouseEnter,
  onMouseLeave,
  setChosenPage,
  isChosen,
  pageNumber,
}) {
  function handleOnClick(){
    if(children !== '...'){
      setChosenPage(pageNumber)
    }
  }
  return (
    <button
      className={`${children === "..." ? "rest" : "Box"} ${
        isChosen ? "chosen" : ""
      }`}
      onClick={handleOnClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

export default Box;
