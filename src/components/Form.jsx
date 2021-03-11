import React, { useState } from "react";
import Register from "./Register";
import '../styles/Form.css';

const Form = () => {
  const [register, setRegister] = useState(true);

  const aRegistro = () => setRegister(false);

  const volverAComponentePrincipal = (e) => setRegister(true);

  const [ingreso, setIngreso] = useState({
    email: "",
    password: "",
  });

  const capturarIngreso = (e) => {
    setIngreso({
      ...ingreso,
      [e.target.name]: [e.target.value],
    });
  };

  const { email, password } = ingreso;

  const verificarIngreso = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") alert("ingrese un email valido.");

    await traerDatos(email, password);
  };

  const traerDatos = async (email, password) => {
    const key =
      "2e13ca84ec3be8b443b97f8c41fa734afda647f8de0276537ef58ad1b9ab7a66";
    const url = `https://api-users.000webhostapp.com/api-usuarios/get.php?key=${key}`;

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
        console.log(data);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <>
      {register ? (
        <main className="ingreso">
          <form className="ingreso__formulario" onSubmit={verificarIngreso} autoComplete="off">
            <div className="ingreso__contenedor">
              <p className="ingreso__text">Usuario o email:</p>

              <input
                type="text"
                className="ingreso__usuario"
                name="email"
                onChange={capturarIngreso}
              />

              <p className="ingreso__text">Password:</p>

              <input
                type="password"
                className="ingreso__usuario"
                name="password"
                onChange={capturarIngreso}
              />

              <button type="submit" className="ingreso__button">
                Ingresar
              </button>

              <button
                type="submit"
                className="ingreso__button--nuevoUsuario"
                onClick={aRegistro}
              >
                Crear cuenta nueva
              </button>
            </div>
          </form>
        </main>
      ) : (
        <Register volverAComponentePrincipal={volverAComponentePrincipal} />
      )}
    </>
  );
};

export default Form;
