//The employee will be able to see their work schedule
import React from "react";
import "./style.css";

const index = () => {
  return (
    <div className="sched ">
      <div className="scheduleInfo">
      <p className="scheduleheader">4/28 Schedule</p>
      <div className="startTimeDiv">
      <p className="startTimeLabel">Start Time:</p>
      <p className="startTime">8 AM</p>
      </div>
    </div>
    </div>
  );
};

export default index;
