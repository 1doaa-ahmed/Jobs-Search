import React from "react";
import back from "../assets/back.png";
import "../styles/Back.css";
import { Link } from "react-router-dom";
function Back({ job }) {
  return (
    <div className="BackContainer">
      <div className="ButtonBack">
        <img src={back} alt="backArrow" className="ButtonBackImage" />
        <Link to="/" className="ButtonBackLink">
          Back to search
        </Link>
      </div>
      <div className="TextBack">
        <h2 className="TitleBack">HOw to Apply</h2>
          <div
            className="DetailBack"
            dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
          />
      </div>
    </div>
  );
}

export default Back;
