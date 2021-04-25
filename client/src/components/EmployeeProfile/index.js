import React, { useState, useEffect } from "react";

import { BsPencil } from "react-icons/bs";

import "./style.css";

const EmployeeProfile = ({ currentEmployee, updateEmployee }) => {
  const [mFirst, setmFirst] = useState();
  const [mLast, setmLast] = useState();
  const [mUserName, setmUserName] = useState();
  const [mWage, setmWage] = useState();
  const [mHours, setmHours] = useState();
  const [mPTO, SetmPTO] = useState();
  const [editName, setEditName] = useState(false);
  const [editUserName, setEditUserName] = useState(false);
  const [newName, setNewName] = useState(mFirst + " " + mLast);

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
        console.log(e.target.value);
        SetmPTO(e.target.value);
        break;
      case "name":
        console.log(e.target.value);
        setNewName(e.target.value);

        const index = e.target.value.indexOf(" ");
        let tmp_first = e.target.value.substr(0, index);
        let tmp_last = e.target.value.substr(index + 1);

        setmFirst(tmp_first);
        setmLast(tmp_last);


        break;
      case "userName":
        setmUserName(e.target.value);
        break;
      default:
        break;
    }
  };

  const setName = () => {
    const index = newName.indexOf(" ");
    let tmp_first = newName.substr(0, index);
    let tmp_last = newName.substr(index + 1);
    console.log(tmp_first);
    console.log(tmp_last);
    setmFirst(tmp_first);
    setmLast(tmp_last);
    setEditName(!editName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(editName);

    if (editName) {
      // setName();

    }
    console.log(mFirst);
    console.log(mLast);
    console.log(mUserName);

    const id = currentEmployee.id;
    //update employee functin located on manage component
    updateEmployee({ id, mFirst, mLast, mUserName, mWage, mHours, mPTO });
  };

  return (
    <div className="employee-profile container">
      <form>
        <div className="update-form">
          <p>ID : {currentEmployee.id}</p>
          <div className="employee-header">


            {editName ? (
              <input
                name="name"
                type="text"
                defaultValue={`${mFirst} ${mLast}`}
                onChange={(e) => handleInput(e)}
              ></input>
            ) : (
              <>
                <p className="header-element name">{currentEmployee.first}</p>
                <p className="header-element name">{currentEmployee.last}</p>
              </>
            )}


            <sup className="edit-icon" onClick={() => setEditName(!editName)}>
              <BsPencil />
            </sup>
          </div>
          <div className="employee-header">
            {editUserName ? (
              <>
                <label>UserName: </label>
                <input
                  name="userName"
                  type="text"
                  defaultValue={mUserName}
                  onChange={(e) => handleInput(e)}
                ></input>
              </>
            ) : (
              <>
                <p className="userName">
                  UserName : {currentEmployee.username}
                </p>
              </>
            )}

            <sup
              className="edit-icon"
              onClick={() => setEditUserName(!editUserName)}
            >
              <BsPencil />
            </sup>
          </div>
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
            <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeProfile;
