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
    <div className="emp-card container" onClick={() => getProfile()}>
      <div className="emp-card container" onClick={onClick}></div>
      <div className="employeeInfo">
        <p className="infoLabel">Name: {`${first} ${last}`}</p>
        <p>Username: {name}</p>
      </div>
      <div>
      <p>{city}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
