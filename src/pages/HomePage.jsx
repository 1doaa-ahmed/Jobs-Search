import React, { useState } from "react";
import "../styles/HomePage.css";
import SearchBar from "../components/SearchBar";
import Content from "../components/Content";
export default function HomePage() {
  const [searchJob, setSearchJob] = useState("");
  return (
    <div className="HomePageContainer">
      <div className="mainContainer">
        <h1 className="HomePageTitle">
          <span>Github </span>Jobs
        </h1>
        <SearchBar searchJob={searchJob} setSearchJob={setSearchJob} />
        <Content searchJob={searchJob} setSearchJob={setSearchJob} />
      </div>
    </div>
  );
}