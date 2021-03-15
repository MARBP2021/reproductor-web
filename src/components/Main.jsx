import React, {useState,useEffect} from "react";
import banner from "../assets/images/banner.jpg";
import "../styles/main.css";

const Main = () => {


  const [count,setCount] = useState(false);

  const [orbinson, setOrbinson] = useState();


  const [music, setMusic] = useState([])
  
  const [Artist1,Artist2,Artist3,Artist4,Artist5] = music;

  const api = async () => {
      
    
    await fetch(`https://interactivecode.000webhostapp.com/api/music/`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      const datos = data;
      setMusic(datos);
    })
    .catch(function (err) {

      console.error(err);

    });
  }


  useEffect ( () => {

    api();

  }, [count])

  return (
   
    <main className="main" data-size="full">
      <div className="limiter">
        <section className="section">
          <h2 className="section__title">Lista de canciones</h2>
          <div className="section__content">
            <div className="song">
              <span className="song__id"></span>
              <img src={banner} alt="banner"/>
              <h3 className="song__name"></h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">2</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">3</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">4</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">5</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">6</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">7</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">8</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">9</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">10</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">11</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">12</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">13</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">14</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">15</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">16</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">17</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">18</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">19</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">20</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">21</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">22</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">23</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">24</span>
              <img src={banner} alt="banner" />
              <h3 className="song__name">Artista</h3>
              <div className="protector"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
