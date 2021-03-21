// import React, { useState } from "react";
import React, {useState} from "react";
import Reproductor from "./components/Reproductor";
import Form from "./components/Form";

const App = () => {
  
  const [logged, setLogged] = useState(false)

  //cuando el usuario entra con su nombre y contrasenia correctos.
  const capturarId = (id, responseUser) => id && responseUser ? setLogged(true): null;
   

  let user = localStorage.getItem("user");
  
  if(user ==="" || user ==="undefined"){
    
    user = false;
    
    localStorage.removeItem("user");

  }
  //cuando el usuario da click en Log Out dentro del reproductor
  const Logout = (e) => {
    setLogged(false);
    localStorage.removeItem('user');  
    console.log(logged);
  }
  


  return (
  <>

  {logged || user ? <Reproductor Logout = {Logout}/> : <Form capturarId = {capturarId}/>}
  
  </>
  
  )
};

export default App;
