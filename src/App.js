// import React, { useState } from "react";
import React, {useState} from "react";
import Reproductor from "./components/Reproductor";
import Form from "./components/Form";

const App = () => {
  

  const [logged, setLogged] = useState(false)

  const capturarId = id => id ? setLogged(true): null;
   
  const user = localStorage.getItem("user");
  

  return (
  <>

  {logged || user? <Reproductor /> : <Form capturarId = {capturarId}/>}
  
  </>
  
  )
};

export default App;
