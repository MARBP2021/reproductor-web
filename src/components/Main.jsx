import React, { useState, useEffect } from "react";
import Player from "./Player";
import "../styles/main.css";

const Main = () => {
  const [count, setCount] = useState(false);
  const [size, setSize] = useState("full");
  const [hidden, setHidden] = useState("true");
  const [state, setState] = useState("play");
  const [visible, setVisible] = useState(true);
  const [ids, setIds] = useState(["", "", "", "", ""]);
  const [names, setNames] = useState(["", "", "", "", ""]);
  const [banners, setBanners] = useState(["", "", "", "", ""]);
  const [song, setSong] = useState({});

  const fetchData = async () => {
    await fetch(`https://interactivecode.000webhostapp.com/api/music/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIds([data[0].id, data[1].id, data[2].id, data[3].id, data[4].id]);
        setNames([
          data[0].name,
          data[1].name,
          data[2].name,
          data[3].name,
          data[4].name,
        ]);
        setBanners([
          data[0].banner,
          data[1].banner,
          data[2].banner,
          data[3].banner,
          data[4].banner,
        ]);

        setVisible(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchSong = async (id) => {
    await fetch(`https://interactivecode.000webhostapp.com/api/music/?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSong(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Mostrando el reproductor oculto
  const showPlayer = (e) => {
    if (size === "full") {
      setSize("short");
      setHidden("false");
      setState("play");
    }
  };

  useEffect(() => {
    // Recuperando las canciones
    fetchData();

    // Colocando la cancion en el reproductor
    document.addEventListener("click", (e) => {
      (async () => {
        if (e.target.className === "protector") {
          await fetchSong(e.target.nextElementSibling.textContent);
          showPlayer(e);

          const $audio = document.querySelector("audio");
          $audio.load();
          $audio.play();
        }
      })();
    });
  }, [count]);

  return (
    <>
      <main className="main" data-size={size}>
        <div className="protector protector--main" data-hidden={visible}>
          <div className="loader"></div>
        </div>
        <div className="limiter">
          <section className="section">
            <h2 className="section__title">Lista de canciones</h2>
            <div className="section__content">
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[0]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[0]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[0]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[1]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[1]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[1]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[2]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[2]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[2]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[3]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[3]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[3]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[4]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[4]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[4]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[0]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[0]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[0]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[1]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[1]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[1]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[2]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[2]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[2]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[3]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[3]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[3]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[4]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[4]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[4]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[0]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[0]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[0]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[1]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[1]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[1]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[2]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[2]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[2]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[3]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[3]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[3]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[4]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[4]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[4]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[0]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[0]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[0]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[1]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[1]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[1]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[2]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[2]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[2]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[3]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[3]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[3]}</h3>
              </div>
              <div className="song">
                <div className="protector"></div>
                <span className="song__id">{ids[4]}</span>
                <img
                  src={`data:image/jpeg;base64,${banners[4]}`}
                  alt="banner"
                />
                <h3 className="song__name">{names[4]}</h3>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Player status={{ hidden, state }} data={song} />
    </>
  );
};

export default Main;
