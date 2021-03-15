// import React, { useState } from "react";
import React, {useState} from "react";
import Reproductor from "./components/Reproductor";
import Form from "./components/Form";

const App = () => {
  

  const [logged, setLogged] = useState(false)

  const capturarId = (id, responseUser) => id && responseUser ? setLogged(true): null;
   

  let user = localStorage.getItem("user");
  
  if(user ==="" || user ==="undefined"){
    
    user = false;
    
    localStorage.removeItem("user");

  }



  return (
  <>

  {logged || user ? <Reproductor /> : <Form capturarId = {capturarId}/>}
  
  </>
  
  )
};

export default App;
