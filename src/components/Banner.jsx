import React from "react";
import "../styles/header.css";
import logo from "../assets/icons/logo.svg";

const Banner = () => {
  return (
    <header className="header">
    <div className="limiter">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>AuraMusic</span>
    </div>
    </div>
    </header>
  );
};

export default Banner;
