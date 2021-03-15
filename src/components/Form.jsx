import React, { useState } from "react";
import Banner from "./Banner";
import Register from "./Register";
import Login from "./Login";
import "../styles/form.css";

const Form = () => {
  const [login, hideForm] = useState(true);

  const changeForm = (value) => {
    hideForm();
  };

  return (
    <>
      <Banner />
      {login ? <Login event={changeForm} /> : <Register event={changeForm} />}
    </>
  );
};
export default Form;
