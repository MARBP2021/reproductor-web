import React from 'react';
import './css-components/form.css';


const Form = () => {
    return ( 
        <>
        <header className = "banner">

        <h1 className = "banner-title">musicfi</h1>


        </header>
        <main className = "ingreso" >
            <form className = "ingreso__formulario">
           
            <div className = "ingreso__contenedor">
            
            <p className = "ingreso__text">Usuario:</p>
            
            <input 
            type = "text" 
            className = "ingreso__usuario--input" 
          
            
            
            />
            
            <p className = "ingreso__text">Password:</p>
            
            <input type ="password" className = "ingreso__password--input" />

            <button type = "submit" className = "ingreso__button">Ingresar</button>
            <button type = "submit" className = "ingreso__button--nuevoUsuario">Crear cuenta nueva</button>
            </div>

            </form>
        
        </main>

        </>




     );
}
 
export default Form;