import React, { useState, useEffect } from "react";
import Player from "./Player";
import "../styles/main.css";

const Main = () => {
  const [count, setCount] = useState(false);
  const [ids, setIds] = useState(["", "", "", "", ""]);
  const [names, setNames] = useState(["", "", "", "", ""]);
  const [banners, setBanners] = useState(["", "", "", "", ""]);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <main className="main" data-size="full">
      <div className="limiter">
        <section className="section">
          <h2 className="section__title">Lista de canciones</h2>
          <div className="section__content">
            <div className="song">
              <span className="song__id">{ids[0]}</span>
              <img src={`data:image/jpeg;base64,${banners[0]}`} alt="banner" />
              <h3 className="song__name">{names[0]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[1]}</span>
              <img src={`data:image/jpeg;base64,${banners[1]}`} alt="banner" />
              <h3 className="song__name">{names[1]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[2]}</span>
              <img src={`data:image/jpeg;base64,${banners[2]}`} alt="banner" />
              <h3 className="song__name">{names[2]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[3]}</span>
              <img src={`data:image/jpeg;base64,${banners[3]}`} alt="banner" />
              <h3 className="song__name">{names[3]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[4]}</span>
              <img src={`data:image/jpeg;base64,${banners[4]}`} alt="banner" />
              <h3 className="song__name">{names[4]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[0]}</span>
              <img src={`data:image/jpeg;base64,${banners[0]}`} alt="banner" />
              <h3 className="song__name">{names[0]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[1]}</span>
              <img src={`data:image/jpeg;base64,${banners[1]}`} alt="banner" />
              <h3 className="song__name">{names[1]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[2]}</span>
              <img src={`data:image/jpeg;base64,${banners[2]}`} alt="banner" />
              <h3 className="song__name">{names[2]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[3]}</span>
              <img src={`data:image/jpeg;base64,${banners[3]}`} alt="banner" />
              <h3 className="song__name">{names[3]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[4]}</span>
              <img src={`data:image/jpeg;base64,${banners[4]}`} alt="banner" />
              <h3 className="song__name">{names[4]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[0]}</span>
              <img src={`data:image/jpeg;base64,${banners[0]}`} alt="banner" />
              <h3 className="song__name">{names[0]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[1]}</span>
              <img src={`data:image/jpeg;base64,${banners[1]}`} alt="banner" />
              <h3 className="song__name">{names[1]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[2]}</span>
              <img src={`data:image/jpeg;base64,${banners[2]}`} alt="banner" />
              <h3 className="song__name">{names[2]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[3]}</span>
              <img src={`data:image/jpeg;base64,${banners[3]}`} alt="banner" />
              <h3 className="song__name">{names[3]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[4]}</span>
              <img src={`data:image/jpeg;base64,${banners[4]}`} alt="banner" />
              <h3 className="song__name">{names[4]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[0]}</span>
              <img src={`data:image/jpeg;base64,${banners[0]}`} alt="banner" />
              <h3 className="song__name">{names[0]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[1]}</span>
              <img src={`data:image/jpeg;base64,${banners[1]}`} alt="banner" />
              <h3 className="song__name">{names[1]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[2]}</span>
              <img src={`data:image/jpeg;base64,${banners[2]}`} alt="banner" />
              <h3 className="song__name">{names[2]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[3]}</span>
              <img src={`data:image/jpeg;base64,${banners[3]}`} alt="banner" />
              <h3 className="song__name">{names[3]}</h3>
              <div className="protector"></div>
            </div>
            <div className="song">
              <span className="song__id">{ids[4]}</span>
              <img src={`data:image/jpeg;base64,${banners[4]}`} alt="banner" />
              <h3 className="song__name">{names[4]}</h3>
              <div className="protector"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
