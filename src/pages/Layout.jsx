import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/HomePage.css";

function Layout() {
  return (
    <>
      <div className="PageContainer">
        <div className="mainContainer">
          <h1 className="PageTitle">
            <span>Github </span>Jobs
          </h1>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
