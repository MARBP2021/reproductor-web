import React from "react";
import Header from "./Header";
import Main from "./Main";

const Reproductor = ({Logout}) => {
  return (
    
    
    <>
      <Header logout = {Logout}/>
      <Main />
    </>
  );
};

export default Reproductor;
