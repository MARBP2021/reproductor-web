import React,{useState} from "react";
import Reproductor from "./components/Reproductor";
import Form from './components/Form';


const App = () => {
  
  const [usuario, setUsuario] = useState("")
  const [usuarioCorrecto, setUsuarioCorrecto] = useState(false);
  const permitirIngreso = id => id ? setUsuarioCorrecto(true) : null ;
  const capturarUsuario = user => {
    
    console.log(user); 
    
    setUsuario(user)
  
  
  }; 

  return (
    <>
    {usuarioCorrecto === false ?
    <Form 
      permitirIngreso = {permitirIngreso}
      capturarUsuario = {capturarUsuario}
    />:<Reproductor 
        setearUsuario = {usuario}
    
    /> }
      
    </>
  );
};

export default App;
