import React, {useState} from 'react';
import './css-components/Register.css';



const Register = () => {
    
    const [almacenarDatos, setAlmacenarDatos] = useState([]);

    const [datos,setDatos ] = useState({

        usuario: '',
        email: '',
        password: ''
        
    });
 
    
    
    const capturarInput = e => {

        setDatos({
            ...datos,
            [e.target.name]:[e.target.value]        
        })
    
    }

    const {usuario,email,password}  = datos;


    const RegistrarUsuario = e => {

        e.preventDefault();

        if(usuario === "" || email === '' || password === "") alert('ingrese un email valido.');

        setAlmacenarDatos([datos])

    }
    
    return ( 
        <>
       <main className = "registro">
            <form 
                className = "registro__formulario"
                onSubmit = {RegistrarUsuario}
            
            
            
            >
           
                <div className = "registro__contenedor">

                    <p className = "registro__text">Usuario:</p>

                        <input 
                        type = "text" 
                        className = "registro__input" 
                        name = 'usuario'
                        onChange = {capturarInput}



                    />

                    <p className = "registro__text">Email:</p>

                    <input 

                        type ="text" 
                        className = "registro__input"
                        name = 'email'
                        onChange = {capturarInput}
                         

                    />

                    <p className = "registro__text">Password:</p>
                        
                    <input 
                    
                        type ="password" 
                        className = "registro__input" 
                        name = 'password'
                        onChange = {capturarInput}
                        
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