import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit")
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      username,
      password,
    });
    try {
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form.Row >
      <Col>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="input"
            name="username"
            placeholder="Enter username"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
          Submit
        </Button>
      </Col>
    </Form.Row>
  );
}

export default Signup;
