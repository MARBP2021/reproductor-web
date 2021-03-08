import React, { useState } from 'react';
import '../styles/Register.css';




const Register = ({ volverAComponentePrincipal }) => {

    const [datos, setDatos] = useState({

        user: '',
        email: '',
        password: ''

    });

    const capturarInput = e => {

        setDatos({

            ...datos,
            [e.target.name]: [e.target.value]

        })


    }

    const { user, email, password } = datos;

    const guardarUsuario = async (user, email, password) => {
        const key = '2e13ca84ec3be8b443b97f8c41fa734afda647f8de0276537ef58ad1b9ab7a66';
        const url = `https://api-users.000webhostapp.com/api-usuarios/add.php?key=${key}`;

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `user=${user}&email=${email}&password=${password}`
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
    }

    const registrarUsuario = async e => {

        e.preventDefault();

        if (user === "" || email === '' || password === "") alert('ingrese un email valido.');


        await guardarUsuario(user, email, password);


        volverAComponentePrincipal();

    }


    return (
        <>
            <main className="registro">
                <form
                    className="registro__formulario"
                    onSubmit={registrarUsuario}



                >

                    <div className="registro__contenedor">

                        <p className="registro__text">Usuario:</p>

                        <input
                            type="text"
                            className="registro__input"
                            name='user'
                            onChange={capturarInput}



                        />

                        <p className="registro__text">Email:</p>

                        <input

                            type="text"
                            className="registro__input"
                            name='email'
                            onChange={capturarInput}


                        />

                        <p className="registro__text">Password:</p>

                        <input

                            type="password"
                            className="registro__input"
                            name='password'
                            onChange={capturarInput}

                        />

                        <button

                            type="submit"
                            className="registro__button"



                        >Registrarse</button>



                    </div>



                </form>

            </main>




        </>


    );

}

export default Register;