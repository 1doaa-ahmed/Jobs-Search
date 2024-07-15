import React, { useState, useEffect } from "react";
import "../styles/Jobs.css";
import earth from "../assets/earth.png";
import clock from "../assets/clock.png";
import { Link } from "react-router-dom";

function Jobs({ jobs }) {

  return (
    <div className="JobsContainer">
      {jobs.length > 0 ? (
        jobs.map((job) => (
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