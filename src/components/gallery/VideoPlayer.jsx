import Plyr from "plyr-react";
import "plyr-react/plyr.css";

function VideoPlayer({ galery, description, title }) {
  if (!galery) {
    return <p className="text-center text-gray-500">Video yoxdur</p>;
  }

  return (
    <div className="bg-white w-full aspect-video">
      <Plyr
        source={{
          type: 'video',
          sources: [
            {
              // src: galery[0],
              src: "https://www.youtube.com/embed/vAZtG1i5G0o?si=fvakOAYah6OnO5nM", // numunevi link -  https://www.youtube.com/embed/vAZtG1i5G0o?si=fvakOAYah6OnO5nM
              provider: 'youtube',
            },
          ],
          youtube: {
            rel: 0,
            showinfo: 0,
            preload: true,
            controls: true,
          },
        }}
        options={{
          controls: [
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'settings',
            'fullscreen',
          ],
          settings: ['quality'],
          quality: {
            default: 720,
            options: [144, 240, 360, 480, 720, 1080],
            forced: true,
          },
        }} />
    </div>
  );
}

export default VideoPlayer;
