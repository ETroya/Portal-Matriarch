import React from "react";
import "./style.css";

const EmployeeCard = ({emp, name, first, last, openProfile, profile, currentEmployee, setEmployee}) => {

    const getProfile = () => {
        
        if(profile){
            if(emp.id !== currentEmployee.id)
          return setEmployee(emp);
        }
        setEmployee(emp);
        openProfile(!profile);
    };

    return (
        <div className="emp-card container text-center " onClick={() => getProfile()}>
            <h1>First: {first}</h1>
            <h1>Last: {last}</h1>
            <h1>Username: {name}</h1>
        </div>
    );
};

export default EmployeeCard;
