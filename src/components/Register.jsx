import React, { useState } from "react";
import "../styles/Register.css";

const Register = ({ goToLogin}) => {

  const [register, setLogin] = useState(true);

  // const goToLogin = () => setLogin(false);
  // const volverAComponentePrincipal = (e) => setLogin(true);

  const [datos, setDatos] = useState({
    user: "",
    email: "",
    password: "",
  });



  const capturarInput = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: [e.target.value],
    });
  };

  const { user, email, password } = datos;

  if(password.length < 8) {
    
    console.log("la contrasenia no puede kalsjdksad")

    
  }


  const guardarUsuario = async (user, email, password) => {
    const url = `https://interactivecode.000webhostapp.com/api/oauth/`;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `user=${user}&email=${email}&password=${password}`,
    };

    await fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  const registrarUsuario = async (e) => {
    e.preventDefault();
    //if (user === "" || email === "" || password === "")
    //alert("No pueden haber campos vacios.");
    await guardarUsuario(user, email, password);

    // volverAComponentePrincipal();
  };

  return (
    <>
      <main className="main main--banner">
        <form className="form" onSubmit={registrarUsuario}>
          <div>
            <div className="form__grid">
              <label className="form__label" htmlFor="user">
                Usuario
              </label>
              <input
                id="user"
                type="text"
                className="form__input"
                name="user"
                placeholder="jhondoe"
                onChange={capturarInput}
                //autoComplete="username"
              />
            </div>
            <div className="form__grid">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form__input"
                name="email"
                placeholder="example@gmail.com"
                onChange={capturarInput}
                //autoComplete="username"
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
                //autoComplete="current-password"
                onChange={capturarInput}

              />


            </div>
          </div>
          <div>
            <button type="submit" className="button">
              Registrarse
            </button>
            <button 
              
              className="button button--secondary" 
              onClick={goToLogin}
              
              
              >

              Iniciar sesion
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
