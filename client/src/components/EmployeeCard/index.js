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
        <div className="emp-card container" onClick={() => getProfile()}>
            <h1>first: {first}</h1>
            <h1>last: {last}</h1>
            <h1>username: {name}</h1>
        </div>
    );
};

export default EmployeeCard;
