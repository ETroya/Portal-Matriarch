//emplyoee list that weill go to the admin page
import React, { useState, useEffect } from "react";
import List from "../List";
import axios from "axios";

// API call
function Employeelist() {
  const [employeeState, setEmployeeState] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=us&results=50")
      .then((allUsers) => {
        setEmployeeState(
          allUsers.data.results.map((result) => {
            let employeeData = {
              firstName: result.name.first,
              lastName: result.name.last,
            };
            return employeeData;
          })
        );
      });
  }, []);

  // input search bar here
  // filter employees by first name in search bar
  const filterName = (event) => {
    let firstName = event.target.value.toLowerCase();
    setEmployeeState(
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
      <table className="table">
        <tbody className="dropzone">
          {employeeState.map((employee, index) => (
            <List key={index} firstName={employee.firstName} lastName={employee.lastName} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employeelist;
