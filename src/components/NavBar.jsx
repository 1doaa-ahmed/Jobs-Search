import React, { useState } from "react";
import "../styles/NavBar.css";
import Location from "./Location";

export default function NavBar({
  fullTime,
  setFullTime,
  location,
  setLocation,
}) {
  const handleCheckboxChange = () => {
    setFullTime((prevState) => !prevState);
  };
  return (
    <div className="NavBarContainer">
      <label className="checkBoxContainer">
        Full time
        <input
          type="checkbox"
          className="checkBoxInput"
          onChange={handleCheckboxChange}
          checked={fullTime}
        />
        <span className="checkmark"></span>
      </label>
      <Location location={location} setLocation={setLocation} />
    </div>
  );
}
