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
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => console.log("ERROR FETCHING JSON : ", error));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    let matchesSearchJob = true;
    let matchesFullTime = true;
    let matchesLocation = true;

    if (searchJob) {
      matchesSearchJob =
        job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
        job.company.toLowerCase().includes(searchJob.toLowerCase());
    }

    if (fullTime) {
      matchesFullTime = job.type === "Full Time";
    }

    if (location) {
      matchesLocation = job.location
        .toLowerCase()
        .includes(location.toLowerCase());
    }

    return matchesSearchJob && matchesFullTime && matchesLocation;
  });

  const indexOfLastJob = currentPage * JobsPerPage;
  const indexOfFirstJob = indexOfLastJob - JobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  if (loading) {
    return <div>Loading...</div>;
    
  }

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

        <Jobs jobs={currentJobs} />
      </div>
      {filteredJobs.length > JobsPerPage && (
        <Footer
          jobs={filteredJobs}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          JobsPerPage={JobsPerPage}
        />
      )}
    </>
  );
}
