import React from "react";
import "../styles/player.css";
import banner from "../assets/images/banner.jpg";

const Player = () => {
  // Cambiando el icono play/pause
  const changeState = () => {
    const $control = document.querySelector(".controls__state");

    if ($control.dataset.state === "play") {
      $control.dataset.state = "pause";
    } else {
      $control.dataset.state = "play";
    }
  };

  // Convirtiendo el tiempo a string
  const secondsToString = (seconds) => {
    let minute = Math.floor((seconds / 60) % 60);
    let second = seconds % 60;
    second = second < 10 ? "0" + second : second;
    return minute + ":" + second;
  };

  // Mostrando el tiempo actual de la cancion
  const showTime = (e) => {
    const $current = document.querySelector(".range__current");
    $current.innerText = secondsToString(e.target.value);
  };

  // Mostrando el reproductor oculto
  document.onclick = (e) => {
    if (e.target.className === "protector") {
      const $main = document.querySelector(".main");

      if ($main.dataset.size === "full") {
        const $footer = document.querySelector(".footer");
        const $control = document.querySelector(".controls__state");

        $main.dataset.size = "short";
        $footer.dataset.hidden = "false";
        $control.dataset.state = "play";
      }
    }
  };

  return (
    <footer className="footer" data-hidden="true">
      <div className="limiter">
        <div className="album">
          <img src={banner} alt="banner" className="album__banner" />
          <span className="album__song">Propuesta indecente</span>
          <span className="album__artist">Romeo Santos</span>
        </div>
        <div className="range">
          <span className="range__current">0:00</span>
          <input
            type="range"
            min={0}
            max={300}
            defaultValue={0}
            step={1}
            onChange={showTime}
          ></input>
          <span className="range__total">5:00</span>
        </div>
        <div className="controls">
          <span
            className="iconify"
            data-icon="fluent:previous-20-filled"
            data-inline="false"
          ></span>
          <div
            className="controls__state"
            data-state="pause"
            onClick={changeState}
          >
            <div className="play">
              <span
                className="iconify"
                data-icon="fluent:play-20-filled"
                data-inline="false"
              ></span>
            </div>
            <div className="pause">
              <span
                className="iconify"
                data-icon="fluent:pause-20-filled"
                data-inline="false"
              ></span>
            </div>
          </div>
          <span
            className="iconify"
            data-icon="fluent:next-20-filled"
            data-inline="false"
          ></span>
        </div>
      </div>
    </footer>
  );
};

export default Player;
