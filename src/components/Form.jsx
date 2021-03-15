import React, { useState } from "react";
import Banner from "./Banner";
import Register from "./Register";
import Login from "./Login";
import "../styles/Form.css";

const Form = ({capturarId}) => {
  const [login, hideForm] = useState(true);

  const goToRegister= () => hideForm(false);
  const goToLogin = () => hideForm(true)

  return (
    <>
    
      <Banner />
      {login ? <Login goToRegister= {goToRegister} capturarId = {capturarId} /> : <Register goToLogin = {goToLogin} />}
    
    
    </>
  );
};
export default Form;
