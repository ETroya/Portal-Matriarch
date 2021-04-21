//Admin side to enrolling a new employee
import React, { useState } from "react";
import { Form, Button, InputGroup, Col } from "react-bootstrap";
import axios from "axios";
import "./style.css";

function EmployeeForm() {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    first: "",
    last: "",
    password: "",
    city: "",
    wage: "",
    hours: "40",
    pto: "40",
    upt: "80",
    vacation: "0",
    admin: false,
  });

  const {
    username,
    first,
    last,
    password,
    city,
    wage,
    hours,
    pto,
    upt,
    vacation,
    admin,
  } = formData;
  const onChange = (e) => {
    console.log(e);
    if (e.target.name === "admin") {
      if (e.target.value === "on") {
        return setFormData({ ...formData, admin: true });
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      username,
      first,
      last,
      password,
      city,
      wage,
      hours,
      pto,
      upt,
      vacation,
      admin,
    });
    try {
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    setValidated(true);
  };

  return (
    <div id="createUserDiv">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group id="createUserInput" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={(e) => onChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group id="createUserInput" controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              name="first"
              type="text"
              placeholder="First Name"
              onChange={(e) => onChange(e)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group id="createUserInput" controlId="validationCustom02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              name="last"
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => onChange(e)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group id="createUserInput" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => onChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group id="createUserInput" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              name="city"
              type="text"
              placeholder="City"
              required
              onChange={(e) => onChange(e)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group id="createUserInput" controlId="validationCustom04">
            <Form.Label>Hourly Wage</Form.Label>
            <Form.Control
              required
              name="wage"
              type="text"
              placeholder="Wage"
              required
              onChange={(e) => onChange(e)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group id="createUserInput" controlId="validationCustomAdmin">
            <Form.Label>Admin</Form.Label>
            <Form.Control
              type="checkbox"
              id="checkBoxButton"
              name="admin"
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button id="adminSubmit" className="btn btn-secondary" type="submit">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

export default EmployeeForm;
