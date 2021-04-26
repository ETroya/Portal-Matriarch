import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import API from "../utils/api";
import { useHistory } from "react-router-dom";
//Feed from the components folder
//need a button to look at all the employee List of just names.
import { ShowDiv } from "../components/ShowDiv";
// import ViewRequest from "../components/ViewRequest";

function Admin() {

const history = useHistory();

useEffect(() => {
  API.isAdmin().then((res) => {
    console.log("/admin");
    console.log(res);
    if(!res.data){
      history.push("/login");
    };
  });
});

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
