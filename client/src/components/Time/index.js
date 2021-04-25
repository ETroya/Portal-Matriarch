import {useStateContext, authContext } from "../../utils/GlobalState";
import React, { useState, useEffect, useContext } from "react";
import { Form, Jumbotron, Button } from "react-bootstrap";
import "./style.css";
import api from "../../utils/api";

const Time = () => {
  const [state, dispatch] = useStateContext();
  const { authData } = useContext(authContext);
  console.log(state.currentUser);
  return (
    <div>
      <Jumbotron fluid>
        <div className="container" id="timeContainer">
          <div className="row">
            <div className="col-12 text-center text-light" id="timeHeader">
              User Name: {authData.user.username}
            </div>
            <div className="col-4 text-center" id="timeBankDiv">
              Paid Time: {authData.user.pto} hours
            </div>
            <div className="col-4 text-center" id="timeBankDiv">
              Unpaid Time: {authData.user.upt} hours
            </div>
            <div className="col-4 text-center" id="timeBankDiv">
              Vacation Time:{authData.user.vacation} hours
            </div>
            <div className="col-4 text-center" id="displayTimeDiv">
              Current Wage: ${authData.user.wage} per hour
            </div>
            <div className="col-4 text-center" id="displayTimeDiv">
              Hours Worked: {authData.user.hours} hours
            </div>
            <div className="col-4 text-center" id="displayTimeDiv">
              City: {authData.user.city}
            </div>
          </div>
        </div>
      </Jumbotron>

      <Jumbotron fluid className="formbtn">
        <Form.Group className="text-center">
          <Form.File id="exampleFile" label="Upload time-off sheet." />
          <Form.Text className="form" color="muted">
            <a
              href="https://docs.google.com/document/d/119FW9OdssS6BbXxsuWVR5Y3qg_aPaFG0YwOI38xcVQ0/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Please fill out a form to request time off here.
            </a>
          </Form.Text>
          <Button id="submit" variant="success">
            Submit
          </Button>
          {""}
        </Form.Group>
      </Jumbotron>
    </div>
  );
};

export default Time;
