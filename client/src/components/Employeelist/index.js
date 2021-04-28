//emplyoee list that weill go to the admin page
import React, { useState, useEffect } from "react";
import List from "../List";
// import axios from "axios";
// import mongoose from "mongoose"
import api from "../../utils/api";
import "./style.css";

// API call
function Employeelist() {
  //employee state total
  const [employeeState, setEmployeeState] = useState([]);
  //filtered employee names
  const [filteredEmployee, setFilterEmployee] = useState([]);

  useEffect(() => {
    //mapping thru the all user array and setting the result to the total user
    api.getEmployee().then((allUsers) => {
      const totalUsers = allUsers.data.map((result) => {
        let employee = {
          firstName: result.first,
          lastName: result.last,
          id: result._id,
          username: result.username,
        };
        return employee;
      });
      setEmployeeState(totalUsers);
      setFilterEmployee(totalUsers);
    });
  }, []);

  // input search bar here
  // filter employees by first name in search bar
  const filterName = (event) => {
    let firstName = event.target.value.toLowerCase();
    setFilterEmployee(
      employeeState.filter((employee) => {
        return employee.firstName.toLowerCase().includes(firstName);
      })
    );
  };

  return (
    // search bar for names
    <div>
      <div className="col-16">
        <input
          type="text"
          onChange={(e) => {
            filterName(e);
          }}
          className="form-control"
          placeholder="Filter by First Name"
        ></input>
      </div>
      {/* make a list here with called items from API */}
      <table className="table" id="list">
        <tbody className="dropzone">
          {filteredEmployee.map((employee, index) => (
            <List
              key={index}
              firstName={employee.firstName}
              lastName={employee.lastName}
              id={employee.id}
              // username={employee.username}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employeelist;
