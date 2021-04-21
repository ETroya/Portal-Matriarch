import React from "react";
import List from "../List";
import "./style.css";

const Time = () => {
  return (
    <div className="container" id="timeContainer">
      <div className="row">
        <div className="col-12 text-center" id="timeHeader">Display logged in user here</div>
        <div className="col-4 text-center" id="timeBankDiv">Personal Time Off</div>
        <div className="col-4 text-center" id="timeBankDiv">Unpaid Time Off</div>
        <div className="col-4 text-center" id="timeBankDiv">Vacation Time</div>
        <div className="col-4 text-center" id="displayTimeDiv">display db info here</div>
        <div className="col-4 text-center" id="displayTimeDiv">display db info here</div>
        <div className="col-4 text-center" id="displayTimeDiv">display db info here</div>
      </div>
    </div>
  );
};

export default Time;
