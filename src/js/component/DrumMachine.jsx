import React from "react";
import { useEffect, useState } from "react";
import { SoundBank } from "../SoundBank";

export const DrumMachine = () => {
  const [setSound, setActiveSound] = useState('')
  // Listen to the keydown event 
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      console.log(event.key)

  // Key must be uppercase to match our data
      play(event.key.toUpperCase())
    });
  }, []);

  // The play function that we want to envoke on-click and on keydown to play our audio
  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setActiveSound(key)
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

// <div id="drum-machine">
//   <div id="display"><h3>{SoundBank[currSound].description}</h3></div>
//     <div className="machine">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm drum-pad" id="Q" onClick={() =>
//           setCurrSound(1)}>Q</div>
//           <div className="col-sm drum-pad" id="W" onClick={() =>
//           setCurrSound(2)}>W</div>
//           <div className="col-sm drum-pad" id="E" onClick={() =>
//           setCurrSound(3)}>E</div>
//       </div>
//       </div>
//       <div className="container">
//         <div className="row">
//         <div className="col-sm drum-pad" id="A" onClick={() =>
//           setCurrSound(4)}>A</div>
//         <div className="col-sm drum-pad" id="S" onClick={() =>
//           setCurrSound(5)}>S</div>
//         <div className="col-sm drum-pad" id="D" onClick={() =>
//           setCurrSound(6)}>D</div>
//       </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm drum-pad" id="Z" onClick={() =>
//           setCurrSound(7)}>Z</div>
//           <div className="col-sm drum-pad" id="X" onClick={() =>
//           setCurrSound(8)}>X</div>
//           <div className="col-sm drum-pad" id="C" onClick={() =>
//           setCurrSound(9)}>C</div>
//         </div>
//       </div>
//     </div>
// </div>

export default DrumMachine;
