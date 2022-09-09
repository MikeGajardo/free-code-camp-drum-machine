import React from "react";
import { useState } from "react";
import { SoundBank } from "../SoundBank";

export const DrumMachine = () => {
  const [currSound, setCurrSound] = useState(0)


  return (
    <div id="drum-machine">
      <div id="display"><h3>{SoundBank[currSound].description}</h3></div>
        <div className="machine">
          <div className="container">
            <div className="row">
              <div className="col-sm drum-pad" id="Q" onClick={() =>
              setCurrSound(1)}></div>
              <div className="col-sm drum-pad" id="W" onClick={() =>
              setCurrSound(2)}></div>
              <div className="col-sm drum-pad" id="E" onClick={() =>
              setCurrSound(3)}></div>
          </div>
          </div>
          <div className="container">
            <div className="row">
            <div className="col-sm drum-pad" id="A" onClick={() =>
              setCurrSound(4)}></div>
            <div className="col-sm drum-pad" id="S" onClick={() =>
              setCurrSound(5)}></div>
            <div className="col-sm drum-pad" id="D" onClick={() =>
              setCurrSound(6)}></div>
          </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm drum-pad" id="Z" onClick={() =>
              setCurrSound(7)}></div>
              <div className="col-sm drum-pad" id="X" onClick={() =>
              setCurrSound(8)}></div>
              <div className="col-sm drum-pad" id="C" onClick={() =>
              setCurrSound(9)}></div>
            </div>
          </div> 
        </div>
    </div>
  )
};

export default DrumMachine;