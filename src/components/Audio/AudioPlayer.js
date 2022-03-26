import React, { useState, useRef, useEffect } from "react";
import track1 from "../../assets/allagain2022.wav";
import audioStyle from "./Audio.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { BsPauseFill } from "react-icons/bs";

function AudioPlayer() {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //refrences
  const audioPlayer = useRef(); //ref for audio component
  const progressBar = useRef(); //ref for progress bar
  const animationRef = useRef();

  //useEffect
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadeddata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };
  return (
    <>
      
      <div className={audioStyle.Audio}>
      <div className={audioStyle.Title}>
        <p>ALL AGAIN - JMRC</p>
      </div>
        <audio ref={audioPlayer} src={track1} preload="metadata" />

        <button className={audioStyle.forwardBackward} onClick={backThirty}>
          <IoMdArrowRoundBack />
          30
        </button>
        <button className={audioStyle.playPause} onClick={togglePlayPause}>
          {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
        </button>
        <button className={audioStyle.forwardBackward} onClick={forwardThirty}>
          30
          <IoMdArrowRoundForward />
        </button>

        {/* current time */}
        <div className={audioStyle.currentTime}>
          {calculateTime(currentTime)}
        </div>

        {/* progress bar */}
        <div className={audioStyle.progressBar}>
          <input
            type="range"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        {/* duration  */}
        <div className={audioStyle.duration}>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
    </>
  );
}

export default AudioPlayer;
