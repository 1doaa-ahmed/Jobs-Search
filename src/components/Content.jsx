import React, { useState } from "react";
import "../styles/Content.css";
import NavBar from "./NavBar";
import Jobs from "./Jobs";
import Footer from "./Footer";
export default function Content({ searchJob }) {
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  return (
    <div className="contentContainer">
      <NavBar
        fullTime={fullTime}
        setFullTime={setFullTime}
        location={location}
        setLocation={setLocation}
      />
      <Jobs
        searchJob={searchJob}
        fullTime={fullTime}
        location={location}
        data={data}
        setData={setData}
      />
      <Footer data={data} setData={setData}/>
    </div>
  );
}
