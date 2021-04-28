import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { authContext, useStateContext } from "../utils/GlobalState";
import { Form, Button, Col } from "react-bootstrap";
import "./style.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [state, dispatch] = useStateContext();
  const [errorBar, setErrorBar] = useState(false);
  const { authData, setAuth } = React.useContext(authContext);
  const { username, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
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
      const res = await axios.post("/api/users/login", body, config);
      if (res.data) {
        setAuth({
          ...authData,
          isAuthenticated: true,
          loading: false,
          user: res.data,
        });
        dispatch({ type: "set-user", payload: res.data });
      }
    } catch (error) {
      // Ensures that isAuthenticated is false to restrict access
      setAuth({ ...authData, isAuthenticated: false });
      // Displays the error message
      setErrorBar(true);
      // Hides the error message after 3 seconds
      setTimeout(() => {
        setErrorBar(false);
      }, 3000);
      // Logs the error
      console.log(error);
    }
  };
  if (authData.isAuthenticated && authData.user.admin) {
    // If user is an admin, redirects to admin page
    return <Redirect to="/admin" />;
  } else if (authData.isAuthenticated && !authData.user.admin) {
    // If user is not an admin, redirects to standard user page
    return <Redirect to="/user" />;
  }
  return (
    <div className="loginDiv">
      <Form>
      <Form.Row>
        <Col>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="input"
              name="username"
              placeholder="Enter Username"
              onChange={(e) => onChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Enter information
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
  
          <Button className="submitButton" variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
            Submit
          </Button>

          {errorBar && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Invalid credentials, please try again.
            </p>
          )}

        </Col>
      </Form.Row>
      </Form>
    </div>
  );
}
export default Login;





