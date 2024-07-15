import React from "react";
import "../styles/NavBar.css";
import Location from "./Location";

export default function NavBar({
  fullTime,
  setFullTime,
  location,
  setLocation,
  setSearchParams,
}) {
  // const showFullTimeJobs = searchParams.get("filter") === 'FullTime' ;
  const handleCheckboxChange = () => {
    setFullTime((prevState) => {
      
      setSearchParams((prevParams) => ({
        ...prevParams,
        filter: prevState ? "" : "FullTime",
      }));
      return !prevState;
    });
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
      <Location
        location={location}
        setLocation={setLocation}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}
