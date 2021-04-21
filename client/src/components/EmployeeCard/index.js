import React from "react";
import "./style.css";

const EmployeeCard = ({emp, name, first, last, openProfile, profile, setEmployee}) => {
    return (
        <div className="emp-card container" onClick={() => {
            console.log({emp});
            setEmployee(emp);
            openProfile(!profile);}}>
            <h1>first: {first}</h1>
            <h1>last: {last}</h1>
            <h1>username: {name}</h1>
        </div>
    );
};

export default EmployeeCard;
