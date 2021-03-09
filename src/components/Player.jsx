import React from 'react';
import '../styles/player.css';
import banner from '../images/foto-generica.png';

const Player = () => {
  const showTime = (e) => {
    console.log(e.target.value);
  }

  return (
    <footer className="footer">
      <div className="limiter">
        <div className="progress">
          <span className="progress__current">3:50</span>
          <input type="range" min={0} max={300} defaultValue={0} step={1} onChange={showTime}></input>
          <span className="progress__total">5:00</span>
        </div>
        <div className="song">
          <img src={banner} alt="banner" className="song__banner" />
          <span className="song__name">Propuesta indecente</span>
          <span className="song__artist">Romeo Santos</span>
        </div>
        <div className="controls">
          <span className="iconify" data-icon="fluent:previous-20-filled" data-inline="false"></span>
          <div className="control__state">
            <span className="iconify" data-icon="fluent:play-20-filled" data-inline="false"></span>
            <span className="iconify" data-icon="fluent:pause-20-filled" data-inline="false"></span>
          </div>
          <span className="iconify" data-icon="fluent:next-20-filled" data-inline="false"></span>
        </div>
      </div>
    </footer>
  );
}

export default Player;