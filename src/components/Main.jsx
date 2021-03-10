import React from 'react';
import Carousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import banner from '../images/foto-generica.png';
import '../styles/main.css';

const Main = () => {
  const options = {
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    smartSpeed: 2000,
    autoWidth: true
  };

  return (
    <main className="main">
      <div className="limiter">
        <section className="section">
          <h2 className="section__title">Generos mas escuchados</h2>
          <Carousel {...options}>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
          </Carousel>
        </section>
        <section className="section">
          <h2 className="section__title">Generos mas escuchados</h2>
          <Carousel {...options}>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
          </Carousel>
        </section>
        <section className="section">
          <h2 className="section__title">Generos mas escuchados</h2>
          <Carousel {...options}>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
            <div className='item banner'>
              <h3 className="banner__title banner__title--center">Genero</h3>
              <img src={banner} alt="imagen1" />
            </div>
          </Carousel>
        </section>
      </div>
    </main >
  );
}

export default Main;