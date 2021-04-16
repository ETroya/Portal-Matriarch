import React, { useState, useEffect } from "react";
import Feed from "../components/feed/index";
import NextDay from "../components/nextDay/index";
import { useStateContext } from "../utils/GlobalState";
import EmployeeList from "../components/Employeelist";
import Time from "../components/Time";
import Pay from "../components/Pay";

function User() {
  const [state, dispatch] = useStateContext();

  const showDiv = () => {
    if (state.openDirectory) {
      return <EmployeeList />;
    } else if (state.openTime) {
      return <Time />;
    } else if (state.openPay) {
      return <Pay />;
    } else {
      return <Feed />;
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        {/* {state.openDirectory ? <Employeelist /> : <Feed />} */}
        {showDiv()}
      </div>
      <div className="col-md-6">
        <NextDay />
      </div>
    </div>
  );
}

export default User;
