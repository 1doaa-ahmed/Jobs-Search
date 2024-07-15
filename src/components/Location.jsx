import React from "react";
import Search from "./Search";
import earth from "../assets/earth.png";
import "../styles/Location.css";

function Location({ location, setLocation, setSearchParams }) {
  const countries = ["London", "Amsterdam", "NewYork", "Berlin"];
  function handleOnClick(country) {
    setLocation(country);
    setSearchParams((prevParams) => ({
      ...prevParams,
      location: country,
    }));
  }
  return (
    <div className="LocationContainer">
      <h3 className="LocationContainerTitle">location</h3>
      <Search
        icon={earth}
        placeholder="City, state, zip code or country"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          setSearchParams((prevParams) => ({
            ...prevParams,
            location: e.target.value,
          }));
        }}
      />
      {countries.map((country) => (
        <label className="Radiocontainer" key={country}>
          <input
            type="radio"
            name="radio"
            // value={location}
            onChange={()=>handleOnClick(country)}
            checked={location === country}
          />
          <span className="checkmark"></span>
          {country}
        </label>
      ))}
    </div>
  );
}

export default Location;
