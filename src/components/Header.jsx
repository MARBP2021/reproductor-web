import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import "../styles/header.css";

const Header = ({ user }) => {
  
  const [userName,setName] = useState(user);

  window.onresize = () => {
    
    //
    

    if(window.innerWidth < 768) {
      setName(user[0].toUpperCase());
    }else{
      setName(user);
    }
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
            <span
              className="iconify"
              data-icon="fluent:search-28-filled"
              data-inline="false"
            ></span>
          </label>
          <input id="search" type="text" placeholder="Buscar en AuraMusic" />
        </div>
        <div className="user">
          <span className="user__name">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
