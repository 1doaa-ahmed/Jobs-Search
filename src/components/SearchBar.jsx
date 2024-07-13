import React, { useState } from "react";
import "../styles/SearchBar.css";
import Search from "./Search";
import bag from "../assets/bag.png";

export default function SearchBar({searchJob , setSearchJob}) {
  return (
    <div className="SearchBarContainer">
      <Search
        icon={bag}
        placeholder="Title, companies, expertise or benefits"
        value={searchJob}
        onChange={(e) => setSearchJob(e.target.value)}
      >
        <button className="SearchBarButton">Search</button>
      </Search>
    </div>
  );
}
