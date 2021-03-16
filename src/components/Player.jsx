import React from "react";
import "../styles/player.css";

const Player = ({ status, data, times, events }) => {
  // const [currentTime, setCurrentTime] = useState("00:00");
  // const [totalTime, setTotalTime] = useState("00:00");
  // document.addEventListener("DOMContentLoaded", () => {
  //   const $range = document.querySelector("input[type='range']");

  //   $range.onInput = () => {
  //     const $audio = document.querySelector("audio");
  //   };
  // });
  const changeValue = () => {
    const $range = document.querySelector("input[type='range']");
    const $audio = document.querySelector("audio");

    $audio.currentTime = $range.value;

    events.setDuration({
      current: $audio.currentTime,
      total: $audio.duration,
    });
  };

  // Cambiando el icono play/pause
  const changeState = () => {
    const $audio = document.querySelector("audio");

    if (status.status === "play") {
      events.setState({ hidden: "false", status: "pause" });
      $audio.pause();
    } else {
      events.setState({ hidden: "false", status: "play" });
      $audio.play();
    }
  };

  // Convirtiendo el tiempo a string
  const secondsToString = (seconds) => {
    let minute = Math.floor((seconds / 60) % 60);
    let second = seconds % 60;
    second = second.toFixed(0);
    second = second < 10 ? "0" + second : second;
    return `0${minute.toFixed(0)}:${second}`;
  };

  // Mostrando el tiempo actual de la cancion
  // const showTime = (e) => {
  //   const $current = document.querySelector(".range__current");
  //   $current.innerText = secondsToString(e.target.value);
  // };

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
          <span className="range__current">
            {secondsToString(times.current)}
          </span>
          <input
            type="range"
            min={0}
            max={times.total}
            value={times.current}
            step={0.1}
            onChange={changeValue}
          ></input>
          <span className="range__total">{secondsToString(times.total)}</span>
        </div>
        <div className="controls">
          <span
            className="iconify"
            data-icon="fluent:previous-20-filled"
            data-inline="false"
          ></span>
          <div
            className="controls__state"
            data-state={status.status}
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
