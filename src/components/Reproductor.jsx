import React from 'react';



const Reproductor = () => {
    return ( 
        <>
            <header className="cabecero">
                
                <img src = "#" alt = 'logo'/>     
                <nav className ="cabecero__navegacion">
                    
                    <img src = "" alt = "lupa-buscador"/>
                        
                    <div className = "nav__container">
                        <h4>User</h4>
                            <select className = "cabecero__select">

                                <option className = "cabecero__option"></option>                                                                            

                            </select>

                        </div>
                </nav>
                
            </header>    

            /*galeria de seleccion y escucha*/ 

            <main className="principal">

                <section className="principal__escuchados">
                    
                    <h2>Generos mas escuchados</h2>

                        <div className="principal__images">
                            <img src ="" alt = "imagen1" />
                            <img src ="" alt = "imagen1" />

                        </div>


                    
                    
                    
                </section>   
                
                <section className="second__escuchados">
                    
                    <h2>Generos mas escuchados</h2>


                        <div className="second__images">
                            <img src ="" alt = "imagen1" />
                            <img src ="" alt = "imagen1" />

                        </div>


                    
                    
                    
                </section>                


                <section className="third__escuchados">
                    
                    <h2>Generos mas escuchados</h2>


                        <div className="third__images">
                            <img src ="" alt = "imagen1" />     
                            <img src ="" alt = "imagen1" />

                        </div>


                    
                    
                    
                </section>
                     


            <section className="audio">
                
                <img src = "" alt ="audio__album"/>
                    
                    <h4>Audio Song</h4>
                    <h5> Audio Author</h5>
                    
                        <div className = "audio__reproductor">
                            
                            
                            <img src = "" alt ="icono-reproducir"/>
                            <img src = "" alt ="icono-atras"/>
                            <img src = "" alt ="icono-adelante"/>

        
        
        
                        </div>
            
            </section>



















            </main>
          

        
        
        
        
        
        
        
        
        
        
        </>





    );
}
 
export default Reproductor;