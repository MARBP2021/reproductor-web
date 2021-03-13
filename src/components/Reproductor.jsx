import React from "react";
import Header from "./Header";
import Main from "./Main";
import Player from "./Player";

const Reproductor = ({setearUsuario}) => {
  return (
    <>
      <Header 
       user = {setearUsuario}
      />
      <Main />
      <Player />
    </>
  );
};

export default Reproductor;
