import React from "react";
import { useEffect, useState } from "react";
import { SoundBank } from "../SoundBank";

export const DrumMachine = () => {
  // Listen to the keydown event 
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      console.log(event.key)
  // Key must be uppercase to match our data bank
      play(event.key.toUpperCase())
    });
  }, []);

  // Use the DOM to add a style to the drum-pad
  const styleActiveKey = (audio) => {
    audio.parentElement.style.backgroundColor = "#FF0000"
  }

  // This function will return the drum-pad to its original colors after a certain amount of time - 300 miliseconds
  const deactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#808080"
    }, 300)
  }

  // The play function that we want to envoke on-click and on keydown to play our audio
  const play = (key) => {
    const audio = document.getElementById(key);
    styleActiveKey(audio)
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio)
  };

  // Map of each div drum pad 
  return SoundBank.map((soundaudio) => {
    return (
      <div className="drum-pad" key={soundaudio.sound} onClick={() => play(soundaudio.key)}>
        <audio className="clip" id={soundaudio.key} src={soundaudio.sound} />
        {soundaudio.key}
      </div>
    );
  });
};

export default DrumMachine;
