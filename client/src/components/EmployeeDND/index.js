import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import ListDND from "../../components/ListDND"

function EmployeeDND() {
  //employee state total
  const [employeeState, setEmployeeState] = useState([]);
  //filtered employee names
  const [filteredEmployee, setFilterEmployee] = useState([]);

  useEffect(() => {
    //mapping thru the all user array and setting the result to the total user
    api.getEmployee().then((allUsers) => {
      const totalUsers = allUsers.data.map((result) => {
        let employee = {
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
    let username = event.target.value.toLowerCase();
    setFilterEmployee(
      employeeState.filter((employee) => {
        return employee.username.toLowerCase().includes(username);
      })
    );
  };

  return (
    <div>
      <div className="col-16">
        <input
          type="text"
          onChange={(e) => {
            filterName(e);
          }}
          className="form-control"
          placeholder="User Name"
        ></input>
      </div>
        <table className="table">
          <tbody className="dropzone">
            {filteredEmployee.map((employee, index) => (
                  <ListDND
                  key={index}
                  id={employee.id}
                  username={employee.username}
                />
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default EmployeeDND;

