import React, { useState, useCallback, useEffect } from "react";
import API from "../../utils/api";

import "./style.css";

const EmployeeProfile = ({ currentEmployee, updateEmployee }) => {
  console.log(currentEmployee);
  const [mFirst, setmFirst] = useState();
  const [mLast, setmLast] = useState();
  const [mUserName, setmUserName] = useState();
  const [mWage, setmWage] = useState();
  const [mHours, setmHours] = useState();
  const [mPTO, SetmPTO] = useState();

  useEffect(() => {
    setmFirst(currentEmployee.first);
    setmLast(currentEmployee.last);
    setmUserName(currentEmployee.username);
    setmWage(currentEmployee.wage);
    setmHours(currentEmployee.hours);
    SetmPTO(currentEmployee.pto);
  }, [currentEmployee]);

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
    const id = currentEmployee.id;
    console.log("SUBMIT!");
    // new route to update profile
    // API.updateProfile({id, mFirst, mLast, mUserName, mWage, mHours, mPTO});
    updateEmployee({ id, mFirst, mLast, mUserName, mWage, mHours, mPTO });
  };

  return (
    <div className="employee-profile container">
      <div className="update-form">
        <p>ID : {currentEmployee.id}</p>
        <div className="employee-header">
          <p className="header-element name">{currentEmployee.first}</p>
          <p className="header-element name">{currentEmployee.last}</p>
        </div>
        <p>UserName : {currentEmployee.username}</p>
        <div className="input-field">
          <br />
          <label for="wage">Wage:</label>
          <input
            className="profile-input"
            id="wage"
            type="number"
            name="mWage"
            value={mWage}
            onChange={(e) => handleInput(e)}
          ></input>
        </div>
        <div className="input-field">
          <label for="hour">hours:</label>
          <input
            className="profile-input"
            id="hour"
            type="number"
            name="mHours"
            value={mHours}
            onChange={(e) => handleInput(e)}
          ></input>
        </div>
        <div className="input-field">
          <label for="pto">PTO:</label>
          <input
            className="profile-input"
            id="pto"
            type="number"
            name="mPTO"
            value={mPTO}
            onChange={(e) => handleInput(e)}
          ></input>
        </div>
        <div className="button-to-submit">
          <button className="submit-btn" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
