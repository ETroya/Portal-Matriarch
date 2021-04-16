import React, { useState, useEffect } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
//Feed from the components folder
//need a button to look at all the employee List of just names.
import Feed from "../components/feed/index";
import EmployeeForm from "../components/EmployeeForm";
import { useStateContext } from "../utils/GlobalState";
import EmployeeList from "../components/Employeelist";
import Time from "../components/Time";
import Pay from "../components/Pay";

function Admin() {
  const [state, dispatch] = useStateContext();

  const showDiv = () => {
    if (state.openDirectory) {
      return <EmployeeList />;
    } else if (state.openTime) {
      return <Time />;
    } else if (state.openPay) {
      return <Pay />;
    } else {
      return <Feed />;
    }
  };

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          {/* {state.openDirectory ? <Employeelist /> : <Feed />} */}
          {showDiv()}
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
              Create New Account
            </Button>
            {state.addUser ? <EmployeeForm /> : null}
            <Button
              id="adminButton"
              className="btn btn-dark"
              variant="primary"
              size="lg"
              block
            >
              Manage Accounts
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
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Admin;
