import React from 'react';
import logo from "../images/logo.svg";
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="limiter">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>AuraMusic</span>
        </div>
        <div className="search">
          <label for="search" id="toggle">
            <span className="iconify" data-icon="fluent:search-28-filled" data-inline="false" ></span>
          </label>
          <input id="search" type="text" placeholder="Buscar en AuraMusic" />
        </div>
      </div>
    </header>
  );
}

export default Header;