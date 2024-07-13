import React from "react";
import "../styles/Box.css";

function Box({
  children,
  onMouseEnter,
  onMouseLeave,
  setDisplayJobs,
  jobs,
  setChosenPage,
  isChosen,
  pageNumber
}) {
  function handleOnClick() {
    const startIndex = (pageNumber - 1) * 5;
    const endIndex = startIndex + 5;
    setDisplayJobs(jobs.slice(startIndex, endIndex));
    setChosenPage(pageNumber);
  }

  return (
    <button
      className={`${children === "..." ?'rest' : 'Box'} ${isChosen ? "chosen" : ""}`}
      onClick={`${children === "..." ?'' : handleOnClick}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

export default Box;
