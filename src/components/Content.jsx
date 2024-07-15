import React, { useEffect, useState } from "react";
import "../styles/Content.css";
import NavBar from "./NavBar";
import Jobs from "./Jobs";
import Footer from "./Footer";
import { useSearchParams } from "react-router-dom";

export default function Content({ searchJob }) {
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const JobsPerPage = 5;
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  const indexOfLastJob = currentPage * JobsPerPage;
  const indexOfFirstJob = indexOfLastJob - JobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <>
      <div className="contentContainer">
        <NavBar
          fullTime={fullTime}
          setFullTime={setFullTime}
          location={location}
          setLocation={setLocation}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />

        <Jobs
          setJobs={setJobs}
          jobs={currentJobs}
          searchJob={searchJob}
          fullTime={fullTime}
          location={location}
        />
      </div>
      <Footer
        jobs={jobs}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        JobsPerPage={JobsPerPage}
      />
    </>
  );
}
