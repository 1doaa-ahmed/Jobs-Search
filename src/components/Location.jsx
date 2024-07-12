import React from "react";
import Search from "./Search";
import earth from "../assets/earth.png";
import "../styles/Location.css";

function Location({ location, setLocation }) {
  const countries = ["London", "Amsterdam", "NewYork", "Berlin"];
  return (
    <div className="LocationContainer">
      <h3 className="LocationContainerTitle">location</h3>
      <Search
        icon={earth}
        placeholder="City, state, zip code or country"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {countries.map((country) => (
        <label className="Radiocontainer" key={country}>
          <input
            type="radio"
            name="radio"
            value={location}
            onChange={() => setLocation(country)}
          />
          <span className="checkmark"></span>
          {country}
        </label>
      ))}
    </div>
  );
}

export default Location;
