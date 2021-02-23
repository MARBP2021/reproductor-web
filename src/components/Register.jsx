import React from 'react';
import './css-components/Register.css';



const Register = () => {
    return ( 
        <>
      
      <main className = "registro">
            <form className = "registro__formulario">
           
                <div className = "registro__contenedor">

                    <p className = "registro__text">Usuario:</p>

                        <input 
                        type = "text" 
                        className = "registro__input" 



                    />

                    <p className = "registro__text">Password:</p>

                    <input 

                        type ="password" 
                        className = "registro__input" 

                    />

                    <p className = "registro__text">Repetir Password:</p>
                        
                    <input 
                    
                        type ="password" 
                        className = "registro__input" 
                        
                    />

                    <button 
                        type = "submit" 
                        className = "registro__button"

                    >Registrarse</button>



        
            </div>

        

            </form>
        
        </main>
        
        
        
        
        
        
        
        </>


     );
}
 
export default Register;