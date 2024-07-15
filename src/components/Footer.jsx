import React, { Children, useEffect, useState } from "react";
import rightArrow from "../assets/right.png";
import leftArrow from "../assets/left.png";
import rightArrowBlue from "../assets/rightBlue.png";
import leftArrowBlue from "../assets/leftBlue.png";
import Box from "./Box";
import "../styles/Footer.css";

export default function Footer({
  jobs,
  currentPage,
  setCurrentPage,
  JobsPerPage,
}) {
  const arrayLength = Math.ceil(jobs.length / JobsPerPage);

  function generatePaginationArray () {
    let array = [];
    if (currentPage <= 3) {
      array = [1, 2, 3, "...", arrayLength];
    } else if (currentPage >= arrayLength - 2) {
      array = [1, "...", arrayLength - 2, arrayLength - 1, arrayLength];
    } else {
      array = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        arrayLength,
      ];
    }
    return array;
  };

  function handlePageChange (page){
    setCurrentPage(page);
  };
  return (
    <div className="FooterContainer">
      <div className="BoxsContainer">
        <HoverBox
          arrow={leftArrow}
          arrowHover={leftArrowBlue}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          direction="left"
          arrayLength={arrayLength}
        />
        {generatePaginationArray().map((num, index) => (
          <Box
            key={index}
            isChosen={currentPage === num}
            setChosenPage={handlePageChange}
            pageNumber={num}
            jobs={jobs}
          >
            {num}
          </Box>
        ))}
        <HoverBox
          arrow={rightArrow}
          arrowHover={rightArrowBlue}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
  currentPage,
  setCurrentPage,
  direction,
  arrayLength,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleOnClick = () => {
    if (direction === "left" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === "right" && currentPage < arrayLength) {
      setCurrentPage((prev) => prev + 1);
    }
  };

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
