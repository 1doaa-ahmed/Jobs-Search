import React, { useEffect, useState } from "react";
import rightArrow from "../assets/right.png";
import leftArrow from "../assets/left.png";
import rightArrowBlue from "../assets/rightBlue.png";
import leftArrowBlue from "../assets/leftBlue.png";
import Box from "./Box";
import "../styles/Footer.css";

function Footer({ jobs, setDisplayJobs }) {
  const arrayLength = Math.ceil((jobs.length || 20) / 5);
  // const array = Array.from({ length: arrayLength }, (_, i) => i + 1);
  const [chosenPage, setChosenPage] = useState(1);
  let array = [];
  useEffect(() => {
    setDisplayJobs(jobs.slice(0, 5));
  }, [jobs, setDisplayJobs]);
  useEffect(() => {
    const startIndex = (chosenPage - 1) * 5;
    const endIndex = startIndex + 5;
    setDisplayJobs(jobs.slice(startIndex, endIndex));
  }, [chosenPage, jobs, setDisplayJobs]);
  if (chosenPage === 1) {
    array = [chosenPage, chosenPage + 1, chosenPage + 2, "...", arrayLength];
  } else if (chosenPage > 1 && chosenPage < 7) {
    array = [chosenPage - 1, chosenPage, chosenPage + 1, "...", arrayLength];
  }
   else if (chosenPage ===7) {
    array = ["..." ,chosenPage, chosenPage + 1,chosenPage + 2, arrayLength];
  }
   else if (chosenPage === 8) {
    array = ["..." ,chosenPage-1, chosenPage ,arrayLength -1  , arrayLength];
  }
   else if (chosenPage === 9) {
    array = ["..." ,chosenPage-2, chosenPage - 1 ,arrayLength -1  , arrayLength];
  }
   else if (chosenPage === arrayLength) {
    array = ["..." ,arrayLength-3, arrayLength - 2 ,arrayLength -1  , arrayLength];
  }
  return (
    <div className="FooterContainer">
      <div className="BoxsContainer">
        <HoverBox
          arrow={leftArrow}
          setChosenPage={setChosenPage}
          arrowHover={leftArrowBlue}
          chosenPage={chosenPage}
          direction="left"
          arrayLength={arrayLength}
        />
        {array.map((num) => (
          <Box
            key={num}
            isChosen={chosenPage === num}
            setChosenPage={setChosenPage}
            setDisplayJobs={setDisplayJobs}
            jobs={jobs}
            pageNumber={num}
          >
            {num}
          </Box>
        ))}
        <HoverBox
          arrow={rightArrow}
          arrowHover={rightArrowBlue}
          chosenPage={chosenPage}
          setChosenPage={setChosenPage}
          direction="right"
          arrayLength={arrayLength}
        />
      </div>
    </div>
  );
}

function HoverBox({
  arrow,
  arrowHover,
  chosenPage,
  setChosenPage,
  direction,
  arrayLength,
}) {
  const [isHover, setIsHover] = useState(false);

  function handleOnClick() {
    if (direction === "left" && chosenPage > 1) {
      setChosenPage((prev) => prev - 1);
    } else if (direction === "right" && chosenPage < arrayLength) {
      setChosenPage((prev) => prev + 1);
    }
  }

  return (
    <div
      className="Box"
      onClick={handleOnClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={isHover ? arrowHover : arrow}
        alt="Arrow"
        className="BoxImage"
      />
    </div>
  );
}
export default Footer;
