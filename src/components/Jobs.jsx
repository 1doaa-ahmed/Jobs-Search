import React, { useEffect, useState } from "react";
import "../styles/Jobs.css";
import earth from "../assets/earth.png";
import clock from "../assets/clock.png";
import { Link } from "react-router-dom";
function Jobs({ searchJob, fullTime, location,setJobs, setDisplayJobs, jobs }) {
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        console.log(data);
        setLoading(false)
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [setDisplayJobs]);
  if(loading){
    return <div>Loading...</div>
  }
  const filteredData = searchJob
    ? jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
          job.company.toLowerCase().includes(searchJob.toLowerCase())
      )
    : jobs;
  const filteredDataFull = fullTime
    ? filteredData.filter((job) => job.type === "Full Time")
    : filteredData;
  const filteredDataFullCountry = location
    ? filteredDataFull.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      )
    : filteredDataFull;
  const jobsToDisplay = filteredDataFullCountry.slice(0, 5);
  return (
    <div className="JobsContainer">
      {jobsToDisplay.length > 0 ? (
        jobsToDisplay.map((job) => (
          <Link className="JobContainer" key={job.id} to={`/job/${job.id}`}>
            <img src={job.url} alt="not found" className="JobImage" />
            <div className="JobDetails">
              <h4 className="title">{job.company}</h4>
              <p className="desc">{job.title}</p>
              <div className="btn-text">
                <button className="btnTime">{job.type}</button>
                <div className="placeAndTime">
                  <div className="place">
                    <img src={earth} alt="earth icon" className="placeImage" />
                    <span className="placeText">{job.location}</span>
                  </div>
                  <div className="time">
                    <img src={clock} alt="clock icon" className="timeImage" />
                    <span className="timeText">
                      {job.created_at.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="JobContainer">Sorry, No Job matched</div>
      )}
    </div>
  );
}

export default Jobs;
