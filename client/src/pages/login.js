import React,{useState} from "react";
import axios from "axios"
import {Redirect} from "react-router-dom"
import {authContext} from "../utils/GlobalState"
import { Form, Button, Row, Col } from "react-bootstrap";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const {authData, setAuth} = React.useContext(authContext)

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
      if (res.data){
        setAuth({
          ...authData,
          isAuthenticated: true,
          loading: false,
        });
      } 
      console.log(res.data);
    } catch (error) {
      setAuth({ ...authData, isAuthenticated: false });
      console.log(error);
    }
  };

  if (authData.isAuthenticated){
    return <Redirect to = "/admin" />;
  }
  return (
    <div className="loginDiv">
    <Form.Row > 
    <Col>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="input"
          name="username"
          placeholder="Enter Username"
          onChange={(e) => onChange(e)}
        />
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
      <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
      </Col>
  </Form.Row>
  </div>
  );
}

export default Login;
