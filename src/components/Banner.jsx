import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.svg";

const Banner = () => {
  return (
    <header className="header header--banner">
      <div className="limiter">
        <div className="logo logo--banner">
          <img src={logo} alt="Logo" />
          <span>AuraMusic</span>
        </div>
      </div>
    </header>
  );
};

export default Banner;
