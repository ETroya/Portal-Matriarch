import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
//Feed from the components folder
//need a button to look at all the employee List of just names.
import Feed from "../components/feed/index";
import EmployeeForm from "../components/EmployeeForm";
import { useStateContext } from "../utils/GlobalState";
import EmployeeList from "../components/Employeelist";
import Time from "../components/Time";
import Pay from "../components/Pay";
import Manage from "../components/Manage";
import { ShowDiv, Submenu } from "../components/ShowDiv";
// import ViewRequest from "../components/ViewRequest";

function Admin() {
  return (
    <>
      <Row>
        <Col>
          {/* {state.openDirectory ? <Employeelist /> : <Feed />} */}
          <ShowDiv />
        </Col>
      </Row>
    </>
  );
}

export default Admin;
