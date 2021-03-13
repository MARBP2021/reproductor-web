import React from "react";
import logo from "../assets/icons/logo.svg";
import "../styles/header.css";

const Header = ({user}) => {
    
  // Evaluando el tamaño de la pantalla
    //const changeName = (user) => {
    //  return window.innerWidth < 768 ? name.substr(0, 1).toUpperCase() : name;
    //};
  
    // Cambiando el formato de nombre del usuario
    //window.onresize = () => {
    //  const $userName = document.querySelector(".user__name");
    //  $userName.innerText = changeName(user);
    //};
  


  return (
    <header className="header">
      <div className="limiter">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>AuraMusic</span>
        </div>
        <div className="search">
          <label htmlFor="search" id="toggle">
            <span
              className="iconify"
              data-icon="fluent:search-28-filled"
              data-inline="false"
            ></span>
          </label>
          <input id="search" type="text" placeholder="Buscar en AuraMusic" />
        </div>
        <div className="user">
          <span className="user__name">{user}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
