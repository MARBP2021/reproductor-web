import React from 'react';
import './css-components/Reproductor.css';
import Logo from '../images/logo.png'
import Lupa from '../images/search-regular-144.png';
import Imagen from '../images/foto-generica.png'
import SkipPrevious from '../images/Icon material-skip-previous.png'
import SkipNext from '../images/Icon material-skip-next.png'





const Reproductor = () => {
    return ( 
        <>
<header className="cabecero">
            <div className="cabecero__logo">
            
                <img src = {Logo} alt= "logo" className="cabecero__logo--imagen" />
            
            </div>
           
            <nav className ="cabecero__navegacion">
                              
                    <div className ="cabecero__nav">
                        <div className="cabecero__lupa">
                        <img src = {Lupa} alt = "lupa-buscador" className = "cabecero__lupa--image"/>
                        </div>    
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

                        </div>


                    
                    
                    
                </section>   
                
                <section className="second__escuchados">
                    
                    <h2 className = "principal__escuchados--title" >Artistas en tendencia</h2>


                        <div className="principal__images">

                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />

                        </div>


                    
                    
                    
                </section>                

                <section className="third__escuchados">
                    
                    <h2 className = "principal__escuchados--title">Albumes más valorados</h2>


                        <div className="principal__images">
                     
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />     
                            <img src = {Imagen} alt = "imagen1" className = "principal__images--generic" />

                        </div>


                    
                    
                    
                </section>
                     

            
            <section className="audio">
                
                <div className="audio__container">
                <img src = {Imagen} alt ="audio__container--image" className = "audio__album"/>
                
                    <div className="audio__description">

                        <h4 className = "audio__description--song">Audio Song</h4>
                        <h5 className = "audio__description--author"> Audio Author</h5>    


                    </div>  
            
                </div>

           
                
                    {/* 
                        <div className = "audio__reproductor">
                            
                            
                            <img src = {SkipPrevious} alt ="icono-atras"/>
                            <img src = {SkipNext} alt ="icono-adelante"/>

        
        
        
                        </div>
                            

            */}                
            </section>
            
            



    













            </main>
          

        
        
        
        
        
        
        
        
        
        
        </>





    );
}
 
export default Reproductor;