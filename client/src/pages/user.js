import React, { useState, useEffect } from "react";
import Feed from "../components/feed/index";
import NextDay from "../components/nextDay/index";
import { useStateContext } from "../utils/GlobalState";
import EmployeeList from "../components/Employeelist";
import Time from "../components/Time";
import Pay from "../components/Pay";
import { ShowDiv } from "../components/ShowDiv";

function User() {
  const [state, dispatch] = useStateContext();

  return (
    <div className="row">
      <div className="col-md-6">
        {/* {state.openDirectory ? <Employeelist /> : <Feed />} */}
        <ShowDiv />
      </div>
      <div className="col-md-6">
        <NextDay />
      </div>
    </div>
  );
}

export default User;
