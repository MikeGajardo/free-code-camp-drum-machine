import React from "react";
import { useState } from "react";

export const DrumMachine = () => {
  return (
    <div id="drum-machine">
        <div id="display">
          <div className="container">
            <div className="row">
              <div className="col-sm drum-pad" id="Q"></div>
              <div className="col-sm drum-pad" id="W"></div>
              <div className="col-sm drum-pad" id="E"></div>
          </div>
          </div>
          <div className="container">
            <div className="row">
            <div className="col-sm drum-pad" id="A"></div>
            <div className="col-sm drum-pad" id="S"></div>
            <div className="col-sm drum-pad" id="D"></div>
          </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm drum-pad" id="Z"></div>
              <div className="col-sm drum-pad" id="X"></div>
              <div className="col-sm drum-pad" id="C"></div>
            </div>
          </div> 
        </div>
    </div>
  )
};

export default DrumMachine;