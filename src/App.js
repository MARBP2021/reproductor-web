// import React, { useState } from "react";
import React from "react";
import Reproductor from "./components/Reproductor";
import Form from "./components/Form";

const App = () => {
  const logged = localStorage.getItem("user") ? true : false;

  return <>{logged ? <Reproductor /> : <Form />}</>;
};

export default App;
