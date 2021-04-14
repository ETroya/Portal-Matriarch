//Admin side to enrolling a new employee
import React, { useState } from "react";
import {Form, Button, InputGroup, Col} from "react-bootstrap"
import axios from "axios";


function EmployeeForm() {
    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({
      username: "",
      first: "",
      last: "",
    });

    const { username, first, last } = formData;
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
        return 
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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              name= "first"
              type="text"
              placeholder="First name"
              defaultValue="Mark"
              onChange={(e) => onChange(e)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              name= "last"
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
              onChange={(e) => onChange(e)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => onChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
  
export default EmployeeForm
