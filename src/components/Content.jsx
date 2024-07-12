import React, { useState } from "react";
import "../styles/Content.css";
import NavBar from "./NavBar";
import Jobs from "./Jobs";
import Footer from "./Footer";
export default function Content({ searchJob }) {
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");
  return (
    <div className="contentContainer">
      <NavBar
        fullTime={fullTime}
        setFullTime={setFullTime}
        location={location}
        setLocation={setLocation}
      />
      <Jobs searchJob={searchJob} fullTime={fullTime} location={location} />
      <Footer />
    </div>
  );
}
