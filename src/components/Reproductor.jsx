import React from 'react';
import Header from "./Header";
import Imagen from '../images/foto-generica.png'
import '../styles/Reproductor.css';

const Reproductor = () => {
  return (
    <>
      <Header />
      <main className="principal">
        <section className="principal__escuchados">
          <h2 className="principal__escuchados--title">Generos mas escuchados</h2>
          <div className="principal__images">
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen2" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen2" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen2" className="principal__images--generic" />
          </div>
        </section>
        <section className="second__escuchados">
          <h2 className="principal__escuchados--title" >Artistas en tendencia</h2>
          <div className="principal__images">
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen2" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen2" className="principal__images--generic" />
          </div>
        </section>
        <section className="third__escuchados">
          <h2 className="principal__escuchados--title">Albumes más valorados</h2>
          <div className="principal__images">
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen2" className="principal__images--generic" />
            <img src={Imagen} alt="imagen1" className="principal__images--generic" />
            <img src={Imagen} alt="imagen2" className="principal__images--generic" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Reproductor;