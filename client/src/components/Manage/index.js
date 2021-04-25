import { useStateContext } from "../../utils/GlobalState";
import { useState, useEffect } from "react";
import API from "../../utils/api";
import EmployeeCard from "../EmployeeCard";
import EmployeeProfile from "../EmployeeProfile/index";
import "./style.css"

const Manage = () => {
  const [state, dispatch] = useStateContext();
  const [profile, openProfile] = useState(false);
  const [currentEmployee, setEmployee] = useState({});
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    //mapping thru the all user array and setting the result to the total user
    API.getEmployee().then((allUsers) => {
      const totalUsers = allUsers.data.map((result) => {
        let employee = {
          id: result._id,
          first: result.first,
          last: result.last,
          username: result.username,
          wage: result.wage,
          hours: result.hours,
          pto: result.pto,
        };
        return employee;
      });
      setEmployeeState(totalUsers);
    });
  }, []);

const updateEmployee = ({id, mFirst, mLast, mUserName, mWage, mHours, mPTO}) => {
  API.updateProfile({id, mFirst, mLast, mUserName, mWage, mHours, mPTO})
  .then((res) => {
    console.log(res.data);
    const updatedUsers = employeeState.map((emp) => {
      if(emp.id === id) {
        emp = {
          id: id,
          first: mFirst,
          last: mLast,
          username: mUserName,
          wage: mWage,
          hours: mHours,
          pto: mPTO
        }
      }
      return emp;
    });

    console.log(updatedUsers);
    setEmployeeState(updatedUsers);

  });
openProfile(!profile);
}

  return (
    <div className="manage-employee-list  row">
      <div
        className="employee-list container col-sm-6"
      >
        {employeeState.map((emp) => {
          return (
            <div key={emp._id}>
              <EmployeeCard
                emp={emp}
                first={emp.first}
                last={emp.last}
                name={emp.username}
                openProfile={openProfile}
                profile={profile}
                currentEmployee={currentEmployee}
                setEmployee={setEmployee}
              />
            </div>
          );
        })}
      </div>
      <div className="employee-profile" className={profile ? "col-sm-6" : ""}>
        {profile ? (
          <EmployeeProfile
            updateEmployee={updateEmployee}
            currentEmployee={currentEmployee}
          />
        ) : null}
      </div>
    </div>
  );
};
export default Manage;
