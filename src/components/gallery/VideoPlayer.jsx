import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

function VideoPlayer({ galery, description, title }) {
  const options = {
    controls: ["play", "progress", "current-time", "mute", "volume", "fullscreen"],
  };

  if (!galery) {
    return <p className="text-center text-gray-500">Video yoxdur</p>;
  }

  return (
    <div className="bg-white w-full aspect-video">
      <Plyr source={{ type: "video", sources: [{ src: galery[0], provider: "youtube" }] }} options={options} />
    </div>
  );
}

export default VideoPlayer;
