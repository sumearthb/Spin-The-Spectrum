import React from "react";
import "./styles.css";
import YoutubeEmbed from "../../components/YoutubeEmbed";

function Video() {
  return (
    <div className="Video">
      <h1>Relax and enjoy the video</h1>
      <YoutubeEmbed embedId="6t-LUlKXKew" />
    
    </div>
  );
}

export default Video;