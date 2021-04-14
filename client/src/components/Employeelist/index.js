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
        <tbody class="dropzone">
          {employeeState.map((employee) => (
            <List firstName={employee.firstName} lastName={employee.lastName} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
//drag and drop function
var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
    
  }, false);

export default Employeelist;
