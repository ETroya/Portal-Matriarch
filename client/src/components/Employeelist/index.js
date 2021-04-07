//emplyoee list that weill go to the admin page
import React, { useState, useEffect } from "react";
import List from "../List";
import axios from "axios";
// import EmployeeForm from "../EmployeeForm"

function Employeelist() {
  const [employeeState, setEmployeeState] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=us&results=50")
      .then((allUsers) => setEmployeeState(allUsers.data.results));
  }, []);

  return (
    <div>
      {/* make a list here with called items from API */}
      <table className="table">
            <tbody>
              {employeeState.map((employee) => (
                <List
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                />
              ))}
            </tbody>
          </table>
    </div>
  )

  // filter employees by first name in search bar
  // const filterName = (event) => {
  //   let first = event.target.value.toLowerCase();
  //   setEmployeeState(
  //     employeeState.filter((employee) => {
  //       return employee.first.toLowerCase().includes(first);
  //     })
  //   );
  // };

  // return (
  //   <div className="col-3">
  //     <input
  //       type="text"
  //       onChange={(e) => {
  //         filterName(e);
  //       }}
  //       className="form-control"
  //       placeholder="Filter by First Name!"
  //     ></input>
  //   </div>
  // );
}

export default Employeelist;
