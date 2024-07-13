import React from "react";
import "../styles/Box.css";

function Box({ children, onMouseEnter, onMouseLeave, onFocus, onBlur }) {
  return (
    <button
      className="Box"
      onClick={() => console.log("click")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
}

export default Box;
