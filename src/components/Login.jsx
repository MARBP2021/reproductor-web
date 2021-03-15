import React, { useState } from "react";
import "../styles/Form.css";

const Login = ({goToRegister, goToPlay, capturarId}) => {
  
  //hooks

  const [datosIncorrectos, setDatosIncorrectos] = useState('datos-ok')
  const [camposVacios, setCamposVacios] = useState('no-error');
  const [login, setIngreso] = useState({

      email: "",
      password: "",

    });

  //destructuring de login

  const { email, password } = login;

  const catchInput = (e) => {
      setIngreso({
        ...login,
        [e.target.name]: [e.target.value]
      });
  };

  //envia los datos hacia la BD
  const traerDatos = async (email, password) => {
      
    const url = `https://interactivecode.000webhostapp.com/api/oauth/`;
    
    const options = {method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `email=${email}&password=${password}`,};
    
    await fetch(url, options)

    .then(function (response) {
      
      return response.json();
    
    })
    .then(function (data) {

      const{user,id}= data;
      
      //aqui se envian el id y el usuario hacia APP, y en caso de que se envien los dos, el usuario podra ingresar.
      
      if(user && id){

        localStorage.setItem("user", data.user) 
        capturarId(id,user);   
      }

      else {
        setDatosIncorrectos("datos-error")
      }
    })
    .catch(function (err) {
      console.error(err);
    });
};



  //formulario
  const verificarIngreso = e => {
     
     
    
      e.preventDefault();
      if(email === "" || password === ""){
        
        setCamposVacios("error-message");
      
      }else {

        setCamposVacios("no-error");

        traerDatos(email, password);  
      
      }
                      
      
  }

      


  return (
    <>
      <main className="main main--banner">
        <form className="form" onSubmit={verificarIngreso}>
        
          <div>
            <div className="form__grid">
            <span className = {datosIncorrectos} >Los datos ingresados son incorrectos</span>
            <span className = {camposVacios} >Los campos no pueden estar vacios.</span>
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                  id="email"
                  type="email"
                  className="form__input"
                  name="email"
                  placeholder="example@gmail.com"
                  onChange={catchInput}
                  autoComplete="username"
              />
            </div>
            <div className="form__grid">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form__input"
                name="password"
                placeholder="********"
                autoComplete="current-password"
                onChange={catchInput}
              />
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="button">
              Ingresar
            
            </button>
            
            
            <button
              type="submit"
              className="button button--secondary"
              onClick={goToRegister}
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
