import { FC, useEffect, useRef } from "react";
import { options } from "../options";

const ambientSoundUri = new URL("../sounds/ambient.mp3", import.meta.url)

const AudioPlayer: FC = () => {
  const audio = useRef<HTMLAudioElement>(null!)
  useEffect(() => {
    options.ambient = audio.current
  }, [])
  return (
    <audio
      typeof="audio/mp3"
      src={ambientSoundUri.href}
      data-audio="ambient"
      autoPlay
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
};

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
