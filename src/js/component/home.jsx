import React from "react";
import { useState } from "react";
import { SoundBank } from "../SoundBank";

//include images into your bundle
import DrumMachine from "../component/DrumMachine.jsx";

//create your first component
const Home = () => {
	const [setSound, setActiveSound] = useState('')
	const play = (key, sound) => {
		const audio = document.getElementById(key);
		audio.currentTime = 0;
		audio.play();
		setActiveSound(sound)
	  };
  return (
    <div id="drum-machine">
      <div id="display">
        <h3>{setSound}</h3>
      </div>
      <div className="machine">
        <div className="row">
          <DrumMachine play={play}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
