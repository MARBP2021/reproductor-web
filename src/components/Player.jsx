import React from "react";
import "../styles/player.css";
import banner from "../assets/images/banner.jpg";

const Player = () => {
  const secondsToString = (seconds) => {
    let minute = Math.floor((seconds / 60) % 60);
    let second = seconds % 60;
    second = second < 10 ? "0" + second : second;
    return minute + ":" + second;
  };

  const showTime = (e) => {
    const $current = document.querySelector(".range__current");
    $current.innerText = secondsToString(e.target.value);
  };

  return (
    <footer className="footer">
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
          <div className="controls__state">
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
