import { FC, useEffect, useRef, useState } from "react";
import { MainPageSound } from "../shared/styled/StyledSound";

const Sound: FC = () => {
  const [activeAudio, setActiveAudio] = useState(true);
  const [loading, setLoading] = useState(true);
  const ambientRef = useRef<HTMLAudioElement>(null!);
  let progress = 57;

  useEffect(() => {
    ambientRef.current = document.querySelector("[data-audio='ambient']")!;
    if (ambientRef.current.readyState !== 4) {
      progress += 1;
    }
  }, []);

  function handleAudio() {
    if (loading) return;
    ambientRef.current.muted ? ambientRef.current.play() : ambientRef.current.pause();
    console.log(ambientRef.current);
    setActiveAudio(!activeAudio);
  }

  return (
    <MainPageSound
      onClick={handleAudio}
      $active={activeAudio}
      $loading={loading}
      data-button="audio"
    >
      <div>{progress}%</div>
    </MainPageSound>
  );
};

Sound.displayName = "Sound";

export default Sound;
