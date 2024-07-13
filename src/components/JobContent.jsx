import React from "react";
import Back from "./Back";
import JobDetail from "./JobDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/JobContent.css'
function JobContent() {
  let { id } = useParams();
  const [job, setJob] = useState(null);
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((job) => job.id === id);
        setJob(job);
      })
      .catch((error) => console.error("Error fetching job data:", error));
  }, [id]);
  if (!job) {
    return <div>Loading...</div>;
  }
  return (
    <div className="jobContentContainer">
      <Back job={job} />
      <JobDetail job={job}/>
    </div>
  );
}

export default JobContent;
