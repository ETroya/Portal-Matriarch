import React, { useState, useEffect, useContext } from "react";
import { useStateContext, authContext } from "../utils/GlobalState";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import API from "../utils/api";
import { useHistory } from "react-router-dom";
//Feed from the components folder
//need a button to look at all the employee List of just names.
import { ShowDiv } from "../components/ShowDiv";
// import ViewRequest from "../components/ViewRequest";
import "./style.css";

function Admin() {

const history = useHistory();
const {authData} = useContext(authContext);

const getGreeting = () => {
  let time = new Date;
  if(time.getHours() >= 12){
    return "Afternoon";
  }
  return "Morning";
}

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
        {/* <div className="userTitle">
    <h1>Good {getGreeting()} {authData.user.first}</h1>
    </div> */}
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
