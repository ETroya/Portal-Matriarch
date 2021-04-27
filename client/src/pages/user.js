import React, { useState, useEffect, useContext } from "react";
import Feed from "../components/feed/index";
import NextDay from "../components/nextDay/index";
import { useStateContext, authContext } from "../utils/GlobalState";
import EmployeeList from "../components/Employeelist";
import Time from "../components/Time";
import Pay from "../components/Pay";
import { ShowDiv } from "../components/ShowDiv";
import "./style.css";

function User() {
  const [state, dispatch] = useStateContext();
  const {authData} = useContext(authContext);

  const getGreeting = () => {
    let time = new Date;
    if(time.getHours() >= 12){
      return "Afternoon";
    }
    return "Morning";
  }
  return (
    <>
    {/* <div className="userTitle">
    <h1>Good {getGreeting()} {authData.user.first}</h1>
    </div> */}
    <div className="row user-content">
      <div className="col-md-8">
        {/* {state.openDirectory ? <Employeelist /> : <Feed />} */}
        <ShowDiv />
      </div>
      <div className="col-md-4">
        <NextDay />
      </div>
    </div>
    </>
  );
}

export default User;
