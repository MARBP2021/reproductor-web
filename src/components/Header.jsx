import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/header.css";

const Header = ({logout}) => {
  // Recuperando el nombre de usuario desde localstorage
  const user = localStorage.getItem("user");
  
  const [userName, setName] = useState(user);
  const [desplegarMenu, setdesplegarMenu] = useState('user__logout')
  
  const mostrarMenu = e => {
    setdesplegarMenu('user__logout--visible');
    if(desplegarMenu === "user__logout--visible") setdesplegarMenu('user__logout');
  }


  const changeName = () =>
  window.innerWidth < 768 ? setName(user[0].toUpperCase()) : setName(user);

  document.addEventListener("DOMContentLoaded", changeName);
  window.addEventListener("resize", changeName);


  return (
    <> 
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
        <div 
            className="user"
            onClick = {mostrarMenu}
            
        >
        


        <span className="user__name">{userName}</span>
        <div 
          className ={desplegarMenu}
          onClick = {logout}
          
          
        >Log Out</div>
  
        </div>
    
      </div>
      
    </header>
    </>
  );
};

export default Header;
