import React, { useState, useCallback } from "react";
import API from "../../utils/api";

import "./style.css";

const EmployeeProfile = ({ currentEmployee }) => {
  console.log(currentEmployee);
  const [mFirst, setmFirst] = useState(currentEmployee.first);
  const [mLast, setmLast] = useState(currentEmployee.last);
  const [mUserName, setmUserName] = useState(currentEmployee.userName);
  const [mWage, setmWage] = useState(currentEmployee.wage);
  const [mHours, setmHours] = useState(currentEmployee.hours);
  const [mPTO, SetmPTO] = useState(currentEmployee.pto);

  const handleInput = (e) => {
    switch (e.target.name) {
      case "mWage":
        setmWage(e.target.value);
        break;
      case "mHours":
        setmHours(e.target.value);
        break;
      case "mPTO":
        SetmPTO(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // const update_profile = {
    //   mFirst,
    //   mLast,
    //   mUserName,
    //   mWage,
    //   mHours,
    //   mPTO,
    // };
const id = currentEmployee._id;
    console.log("SUBMIT!");
    // new route to update profile
    API.updateProfile({id, mFirst, mLast, mUserName, mWage, mHours, mPTO});
  };

  return (
    <div className="employee-profile container">
      <h1>{currentEmployee.first}</h1>
      <h1>{currentEmployee.last}</h1>
      <h1>{currentEmployee.username}</h1>
      <h1>{currentEmployee.id}</h1>

      <label>Wage:</label>
      <input
        type="number"
        name="mWage"
        value={mWage}
        onChange={(e) => handleInput(e)}
      ></input>
      <label>hours:</label>
      <input
        type="number"
        name="mHours"
        value={mHours}
        onChange={(e) => handleInput(e)}
      ></input>
      <label>PTO:</label>
      <input
        type="number"
        name="mPTO"
        value={mPTO}
        onChange={(e) => handleInput(e)}
      ></input>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default EmployeeProfile;
