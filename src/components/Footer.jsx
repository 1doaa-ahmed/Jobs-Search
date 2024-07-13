import React, { useEffect, useState } from "react";
import rightArrow from "../assets/right.png";
import leftArrow from "../assets/left.png";
import rightArrowBlue from "../assets/rightBlue.png";
import leftArrowBlue from "../assets/leftBlue.png";
import Box from "./Box";
import "../styles/Footer.css";

function Footer({ jobs, setDisplayJobs }) {
  const arrayLength = Math.ceil(( jobs.length || 25) / 5);
  const array = Array.from({ length: arrayLength }, (_, i) => i + 1);

  useEffect(() => {
    setDisplayJobs(jobs.slice(0, 5));
  }, [jobs, setDisplayJobs]);
  return (
    <div className="FooterContainer">
      <div className="BoxsContainer">
        <HoverBox arrow={leftArrow} arrowHover={leftArrowBlue} />
        {array.map((num) => (
          <Box key={num} setDisplayJobs={setDisplayJobs} jobs={jobs}>
            {num}
          </Box>
        ))}
        <HoverBox arrow={rightArrow} arrowHover={rightArrowBlue} />
      </div>
    </div>
  );
}

function HoverBox({ arrow, arrowHover }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={isHover ? arrowHover : arrow}
        alt="Arrow"
        className="BoxImage"
      />
    </Box>
  );
}

export default Footer;
