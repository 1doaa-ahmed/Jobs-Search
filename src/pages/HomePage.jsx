import React, { useState } from "react";
import "../styles/HomePage.css";
import SearchBar from "../components/SearchBar";
import Content from "../components/Content";
export default function HomePage() {
  const [searchJob, setSearchJob] = useState("");
  return (
    <>
        <SearchBar searchJob={searchJob} setSearchJob={setSearchJob} />
        <Content searchJob={searchJob} setSearchJob={setSearchJob} />
    </>
  );
}
