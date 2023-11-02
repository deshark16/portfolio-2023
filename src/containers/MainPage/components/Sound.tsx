import { FC, useEffect, useMemo, useRef, useState } from "react";
import { MainPageSound } from "../shared/styled/StyledSound";
import { Progress } from "../shared/utils/progress";

const audioUrl = new URL("../sounds/ambient.mp3", import.meta.url);

const Sound: FC = () => {
  const [activeAudio, setActiveAudio] = useState(false);
  const [loading, setLoading] = useState(true);
  const ambientRef = useRef<HTMLAudioElement>(null!);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    new Progress({
      fileUrl: audioUrl.href,
      setProgress,
    });
  }, []);

  useMemo(() => {
    if (progress !== 100) return;
    setLoading(false);
  }, [progress]);

  function handleAudio() {
    if (loading && progress !== 100) return;
    setActiveAudio(!activeAudio);
    
    !activeAudio
      ? ambientRef.current.play()
      : ambientRef.current.pause();
  }

  return (
    <>
      <MainPageSound
        onClick={handleAudio}
        $active={activeAudio}
        $loading={loading}
        data-button="audio"
      >
        <div>{progress}%</div>
      </MainPageSound>
      <audio typeof="audio/mp3" src={audioUrl.href} ref={ambientRef}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  );
};

Sound.displayName = "Sound";

export default Sound;
