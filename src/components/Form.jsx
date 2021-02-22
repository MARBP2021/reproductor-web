import React, {useState} from 'react';
import './css-components/Login.css';


const Form = () => {
    
    const [register, setRegister] = useState(true);
    
    const aRegistro = () => setRegister(false);


    return ( 
        <>
        

      
        <main className = "ingreso">
            <form className = "ingreso__formulario">
           
            <div className = "ingreso__contenedor">
            
            <p className = "ingreso__text">Usuario:</p>
            
            <input 
            type = "text" 
            className = "ingreso__usuario--input" 
          
            
            
            />
            
            <p className = "ingreso__text">Password:</p>
            
            <input 
            
            type ="password" 
            className = "ingreso__password--input" 
            
            />

            <button 
            type = "submit" 
            className = "ingreso__button"
            
            >Ingresar</button>
              <button

            type = "submit" 
            className = "ingreso__button--nuevoUsuario"



            >Crear cuenta nueva</button>
            
            
           

            </div>
           
        

            </form>
        
        </main>

        </>




     );
}
 
export default Form;