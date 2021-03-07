import React,{useState} from 'react';
import './css-components/Reproductor.css';
import Logo from '../images/logo.png'
import Lupa from '../images/search-regular-144.png';
import Imagen from '../images/foto-generica.png'
import SkipPrevious from '../images/Icon material-skip-previous.png'
import Play from '../images/play-regular-24.png'
import Pause from '../images/pause-regular-24.png'
import SkipNext from '../images/Icon material-skip-next.png'





const Reproductor = () => {

    const [agrandar, setAgrandar] = useState("cabecero__lupa")
    const [texto, setTexto] = useState("")
    const AgrandarInput = () => {
    
        setAgrandar("cabecero__lupa--onClick");
        setTexto("Buscar por album, cancion o artista...")
        
    
    
    }




    return ( 
        <>
<header className="cabecero">
            <div className="cabecero__logo">
            
                <img src = {Logo} alt= "logo" className="cabecero__logo--imagen" />
            
            </div>
           
            <nav className ="cabecero__navegacion">
                              
                    <div className ="cabecero__nav">

                        <input 
                            type="text" 
                            className={agrandar}
                            onClick = {AgrandarInput}
                            placeholder = {texto}
                            /> 
                            {/* 
                            <img 
                                src = {Lupa} 
                                className= "cabecero__lupa--image" 
                                onClick = {AgrandarInput}    
                            
                            />   
                            */}

                            <div className="cabecero__select">
                                <span className = "span">User</span>

                                    <select className = "cabecero__select--button">

                                                                                                                

                                    </select>
                            </div>
                    
                    </div>
            </nav>
                
    </header>    

            

            <main className="principal">

                <section className="principal__escuchados">
                    
                    <h2 className = "principal__escuchados--title">Generos mas escuchados</h2>
                        
                        <div className="principal__images">
                            
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen2" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen2" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen2" className = "principal__images--generic" />


                        </div>


                    
                    
                    
                </section>   
                
                <section className="second__escuchados">
                    
                    <h2 className = "principal__escuchados--title" >Artistas en tendencia</h2>


                        <div className="principal__images">

                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen2" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen2" className = "principal__images--generic" />

                        </div>


                    
                    
                    
                </section>                

                <section className="third__escuchados">
                    
                    <h2 className = "principal__escuchados--title">Albumes más valorados</h2>


                        <div className="principal__images">
                     
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />     
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen2" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen2" className = "principal__images--generic" />

                        </div>


                    
                    
                    
                </section>
                     

            
            <section className="audio">
                
                <div className="audio__container">
                <img src = {Imagen} alt ="audio__container" className = "audio__album"/>
                
                    <div className="audio__description">

                        <h4 className = "audio__description--song">Audio Song</h4>
                        <h5 className = "audio__description--author"> Audio Author</h5>    

                    </div>  
                    <div className="audio__reproductor">
                        <img src = {SkipPrevious} alt ="icono-atras" className = "audio__reproductor--button"/>
                        <div className="audio__reproductor--play">
                            <img src = {Pause} alt = "play-icon" className= "audio__reproductor--play--icon" />

                        </div>    
                        <img src = {SkipNext} alt ="icono-adelante"  className = "audio__reproductor--button"/>
                       
                    </div>
               
                </div>

           
                
                
                            

                          
            </section>
            
            



    













            </main>
          

        
        
        
        
        
        
        
        
        
        
        </>





    );
}
 
export default Reproductor;