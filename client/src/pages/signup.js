import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function Signup() {
  return (
    <Form.Row>
      <Col>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="input" placeholder="Enter username" />
          
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </Form.Row>
  );
}

export default Signup;