import React from 'react'

import "./style.css";

const EmployeeProfile = ({currentEmployee}) => {
    return (
        <div className="employee-profile container">
            <h1>{currentEmployee.first}</h1>
            <h1>{currentEmployee.last}</h1>
            <h1>{currentEmployee.username}</h1>
            <h1>{currentEmployee.id}</h1>
       
            <label>Wage:</label>
            <input type="text"></input>
            <label>hours:</label>
            <input type="text"></input>
            <label>PTO:</label>
            <input type="text"></input>
            <label>example:</label>
            <input type="text"></input>
        </div>
    )
}

export default EmployeeProfile
