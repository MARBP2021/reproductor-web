import React, { useState } from "react";
import "../styles/player.css";

const Player = ({ status, data }) => {
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");

  // Cambiando el icono play/pause
  const changeState = () => {
    const $control = document.querySelector(".controls__state");
    const $audio = document.querySelector("audio");

    if ($control.dataset.state === "play") {
      $control.dataset.state = "pause";
      $audio.pause();
    } else {
      $control.dataset.state = "play";
      $audio.play();
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

  return (
    <footer className="footer" data-hidden={status.hidden}>
      <div className="limiter">
        <div className="album">
          <img
            src={`data:image/jpeg;base64,${data.banner ? data.banner : null}`}
            alt="banner"
            className="album__banner"
          />
          <span className="album__song">{data.artist}</span>
          <span className="album__artist">{data.song}</span>
        </div>
        <div className="range">
          <span className="range__current">{currentTime}</span>
          <input
            type="range"
            min={0}
            max={300}
            defaultValue={0}
            step={1}
            onChange={showTime}
          ></input>
          <span className="range__total">{totalTime}</span>
        </div>
        <div className="controls">
          <span
            className="iconify"
            data-icon="fluent:previous-20-filled"
            data-inline="false"
          ></span>
          <div
            className="controls__state"
            data-state={status.state}
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
      <audio>
        <source
          src={`data:audio/mpeg;base64,${data.audio}`}
          type="audio/mpeg"
        />
      </audio>
    </footer>
  );
};

export default Player;
