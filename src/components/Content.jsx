import React, { useState } from "react";
import "../styles/Content.css";
import NavBar from "./NavBar";
import Jobs from "./Jobs";
import Footer from "./Footer";
export default function Content({ searchJob }) {
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  return (
    <>
    
    <div className="contentContainer">
      <NavBar
        fullTime={fullTime}
        setFullTime={setFullTime}
        location={location}
        setLocation={setLocation}
      />
      <Jobs
      setJobs={setJobs}
        jobs={displayJobs}
        searchJob={searchJob}
        fullTime={fullTime}
        location={location}
        setDisplayJobs={setDisplayJobs}
      />
    </div>
      <Footer jobs={jobs} setDisplayJobs={setDisplayJobs} />
    </>
  );
}
