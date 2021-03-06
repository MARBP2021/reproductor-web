import React from 'react';
import logo from "../images/logo.svg";
import '../styles/header.css';

const Header = () => {
  const name = 'jfloresh631';

  const changeName = (name) => {
    return (window.innerWidth < 768)
      ? (name.substr(0, 1)).toUpperCase()
      : name;
  }

  window.onresize = () => {
    const $userName = document.querySelector('.user__name');
    $userName.innerText = changeName(name)
  }

  return (
    <header className="header">
      <div className="limiter">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>AuraMusic</span>
        </div>
        <div className="search">
          <label htmlFor="search" id="toggle">
            <span className="iconify" data-icon="fluent:search-28-filled" data-inline="false" ></span>
          </label>
          <input id="search" type="text" placeholder="Buscar en AuraMusic" />
        </div>
        <div className="user">
          <span className="user__name">{changeName(name)}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;