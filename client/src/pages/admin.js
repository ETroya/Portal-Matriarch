import React, { useState } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
//Feed from the components folder
//need a button to look at all the employee List of just names.
import Feed from "../components/feed/index";
import EmployeeForm from "../components/EmployeeForm";
import { useStateContext } from "../utils/GlobalState";
import Employeelist from "../components/Employeelist";

function Admin() {
  const [state, dispatch] = useStateContext();
  return (
    <>
      <h1 id="helloText">Hello Admin</h1>
      <Row>
        <Col xs={12} md={6}>
          <Feed />
        </Col>
        <Col xs={12} md={6}>
          <div className="adminDiv">
            <Button
              id="adminButton"
              className="btn btn-dark"
              onClick={() => dispatch({ type: "toggle-user" })}
              variant="primary"
              size="lg"
              block
            >
              Create New Employee Account
            </Button>
            {state.addUser ? <EmployeeForm /> : null}
            <Button
              id="adminButton"
              className="btn btn-dark"
              onClick={() => dispatch({ type: "toggle-new-post" })}
              variant="primary"
              size="lg"
              block
            >
              Create New Post
            </Button>
            <Button
              id="adminButton"
              className="btn btn-dark"
              variant="primary"
              size="lg"
              block
            >
              Create Schedule
            </Button>
            <Button
              id="adminButton"
              className="btn btn-dark"
              variant="primary"
              size="lg"
              block
            >
              View Requested Time Off
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Admin;
