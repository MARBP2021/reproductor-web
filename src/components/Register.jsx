import React, { useState } from "react";
import "../styles/Register.css";

const Register = ({ goToLogin }) => {
  const [registroExitoso, setRegistroExitoso] = useState("no-registro");
  const [errorRegistro, setErrorRegistro] = useState("no-error-vacio");
  const [datos, setDatos] = useState({ user: "", email: "", password: "" });

  const capturarInput = (e) => {
    setDatos({ ...datos, [e.target.name]: [e.target.value] });
  };

  const { user, email, password } = datos;

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
        console.log(data.mensaje);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  const registrarUsuario = async (e) => {
    e.preventDefault();

    if (user === "" || email === "" || password === "") {
      setErrorRegistro("error-vacio");
    } else {
      setErrorRegistro("no-error-vacio");
      setRegistroExitoso("registro-exitoso");
      await guardarUsuario(user, email, password);
    }
  };

  return (
    <>
      <main className="main main--banner">
        <form className="form" onSubmit={registrarUsuario}>
          <div>
            <div className="form__grid">
              <span id={errorRegistro}>No pueden haber campos vacios</span>
              <span id={registroExitoso}>
                Usuario registrado con éxito. Da click en Iniciar Sesión para
                ingresar o refrescá la pagina.
              </span>
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
                autoComplete="username"
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
                onChange={capturarInput}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="button">
              Registrarse
            </button>
            <button className="button button--secondary" onClick={goToLogin}>
              Iniciar sesion
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
