import React, {useState} from 'react';
import Register from './Register';
import './css-components/Form.css';


const Form = () => {
    
    const [register, setRegister] = useState(true);
    
    const aRegistro = () => setRegister(false);


    return ( 
        <>
        {register ?   
        
        <main className = "ingreso">
            <form className = "ingreso__formulario">
           
                <div className = "ingreso__contenedor">

                    <p className = "ingreso__text">Usuario:</p>

                        <input 
                        type = "text" 
                        className = "ingreso__usuario" 
                    />

                    <p className = "ingreso__text">Password:</p>

                    <input 

                        type ="password" 
                        className = "ingreso__usuario" 

                    />

                    <button 
                        type = "submit" 
                        className = "ingreso__button"

                    >Ingresar</button>



                    <button


                        type = "submit" 
                        className = "ingreso__button--nuevoUsuario"
                        onClick = {aRegistro}


                    >Crear cuenta nueva</button>  
            
            </div>

        

            </form>
        
        </main>
        
        
        
        :     <Register /> }
        
        
        
        
        
        
        
        
        </>




     );
}
 
export default Form;