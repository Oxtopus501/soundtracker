import React from "react";

import "./play-button.css";
import play from "../../images/play.png";
function PlayButton() {
  return (
    <div className="track-tile__play-button">
      <img src={play} alt="play" className="track-tile__play-icon"></img>
    </div>
  );
}

export default React.memo(PlayButton);
