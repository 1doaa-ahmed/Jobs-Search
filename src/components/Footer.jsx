import React, { useState } from "react";
import rightArrow from "../assets/right.png";
import leftArrow from "../assets/left.png";
import rightArrowBlue from "../assets/rightBlue.png";
import leftArrowBlue from "../assets/leftBlue.png";
import Box from "./Box";
import "../styles/Footer.css";

function Footer({ data, setData }) {
  const arrayLength = Math.ceil(/*data?.length ||*/ 20 / 5); // Adjusted to use Math.ceil and default to 20 if data is undefined
  const array = Array.from({ length: arrayLength }, (_, i) => i + 1);

  console.log(array);

  return (
    <div className="FooterContainer">
      <div className="BoxsContainer">
        <HoverBox
          arrow={leftArrow}
          arrowHover={leftArrowBlue}
          // arrowFocus={leftArrowWhite}
        />
        {array.map((num) => (
          <Box key={num}>{num}</Box>
        ))}
        <HoverBox arrow={rightArrow} arrowHover={rightArrowBlue} />
      </div>
    </div>
  );
}

function HoverBox({ arrow, arrowHover, arrowFocus }) {
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      <img
        src={isHover ? arrowHover : isFocus ? arrowFocus : arrow}
        alt="Arrow"
        className="BoxImage"
      />
    </Box>
  );
}

export default Footer;
