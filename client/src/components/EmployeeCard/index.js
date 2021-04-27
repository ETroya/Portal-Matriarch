import React from "react";
import "./style.css";

const EmployeeCard = ({
  emp,
  name,
  first,
  last,
  city,
  openProfile,
  profile,
  currentEmployee,
  setEmployee,
  onClick,
}) => {
  const getProfile = () => {
    if (profile) {
      if (emp.id !== currentEmployee.id) return setEmployee(emp);
    }
    setEmployee(emp);
    openProfile(!profile);
  };

  return (
    <div className="emp-card container" onClick={() => {getProfile()}}>
      <div className=" container" onClick={onClick}></div>



      <div className="employeeInfo">
        <div className="employeeName">
          <p className="nameLabel">
            Name: <b className="infoContent">{`${first} ${last}`}</b>
          </p>
        </div>
        <div className="employeeUsername">
          <p className="usernameLabel">
            Username: <b className="infoContent">{name}</b>
          </p>
        </div>
      </div>
      <div className="employeeCity">
        <p>
          City: <b>{city}</b>
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
