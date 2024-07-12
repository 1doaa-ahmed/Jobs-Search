import React, { useEffect, useState } from "react";
import "../styles/Jobs.css";
import earth from "../assets/earth.png";
import clock from "../assets/clock.png";

function Jobs({ searchJob, fullTime, location }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data)
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  if (!data) {
    return <div>No jobs available</div>;
  }
  const filteredData = searchJob
    ? data.filter(
        (job) =>
          job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
          job.company.toLowerCase().includes(searchJob.toLowerCase())
      )
    : data;
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
          <div className="JobContainer" key={job.id}>
            <img src={job.url} alt="" className="JobImage" />
            <div className="JobDetails">
              <h4 className="title">{job.company}</h4>
              <p className="desc">{job.title}</p>
              <div className="btn-text">
                <button className="btnTime">{job.type}</button>
                <div className="placeAndTime">
                  <div className="place">
                    <img src={earth} alt="" className="placeImage" />
                    <span className="placeText">{job.location}</span>
                  </div>
                  <div className="time">
                    <img src={clock} alt="" className="timeImage" />
                    <span className="timeText">
                      {job.created_at.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="JobContainer">Sorry, No Job matched</div>
      )}
    </div>
  );
}

export default Jobs;
