import React, { useState } from "react";
import "../styles/form.css";

const Login = ({ event }) => {
  const goToRegister = () => {
    event(false);
  };

  const [login, setIngreso] = useState({
    email: "",
    password: "",
  });

  const catchInput = (e) => {
    setIngreso({
      ...login,
      [e.target.name]: [e.target.value],
    });
  };

  const { email, password } = login;

  const verificarIngreso = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") alert("ingrese un email valido.");

    await traerDatos(email, password);
  };

  const traerDatos = async (email, password) => {
    const url = `https://interactivecode.000webhostapp.com/api/oauth/`;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&password=${password}`,
    };

    await fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // permitirIngreso(data.id);
        // capturarUsuario(data.user);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <>
      <main className="main main--banner">
        <form className="form" onSubmit={verificarIngreso}>
          <div>
            <div className="form__grid">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
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
            <button type="submit" className="button">
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
