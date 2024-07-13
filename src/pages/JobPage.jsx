import React from "react";
import JobContent from "../components/JobContent";

function JobPage() {
  
  return (
    <div className="PageContainer">
      <div className="mainContainer">
        <h1 className="PageTitle">
          <span>Github </span>Jobs
        </h1>
        <JobContent />
      </div>
    </div>
  );
}

export default JobPage;
