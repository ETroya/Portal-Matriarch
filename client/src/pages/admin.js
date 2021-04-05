import React, { useState } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
//Feed from the components folder
//need a button to look at all the employee List of just names.
import Feed from "../components/feed/index";
import EmployeeForm from "../components/EmployeeForm"


function Admin() {
  return (
    <>
      <h1>Hello Admin</h1>
      <Row>
        <Col xs={12} md={2}>
          <Form.Group>
            <Form.Control type="text" placeholder="Find Employee" />
          </Form.Group>
          <Container>
      Employee information goes here 
          </Container>
        </Col>

        <Col xs={12} md={7}>
          <Feed />
        </Col>
        <Col xs={12} md={3}>
        <Button  variant="primary" size="lg" block>
            Create New Employee Account
          </Button>
          <Button  variant="primary" size="lg" block>
            Requested Time Off
          </Button>
          <Button  variant="primary" size="lg" block>
            Make a Schedule
          </Button>
          {/* employeeform? */}
          <EmployeeForm />





        </Col>
      </Row>
    </>
  );
}

export default Admin;
