import React from "react";
import { Form, Jumbotron } from "react-bootstrap";
import List from "../List";
import "./style.css";

const Time = () => {
  return (
    <div>
      <Jumbotron fluid>
        <div className="container" id="timeContainer">
          <div className="row">
            <div className="col-12 text-center" id="timeHeader">
              Display logged in user here
            </div>
            <div className="col-4 text-center" id="timeBankDiv">
              Personal Time Off
            </div>
            <div className="col-4 text-center" id="timeBankDiv">
              Unpaid Time Off
            </div>
            <div className="col-4 text-center" id="timeBankDiv">
              Vacation Time
            </div>
            <div className="col-4 text-center" id="displayTimeDiv">
              display db info here
            </div>
            <div className="col-4 text-center" id="displayTimeDiv">
              display db info here
            </div>
            <div className="col-4 text-center" id="displayTimeDiv">
              display db info here
            </div>
          </div>
        </div>
      </Jumbotron>

      <Jumbotron fluid className="formbtn">
        <Form.Group className="text-center">
          <Form.Label for="exampleFile">Upload to submit time-off sheet.</Form.Label>
          <Form.Control type="file" name="file" id="exampleFile" />
          <Form.Text className="form" color="muted">
            <a href="https://docs.google.com/document/d/119FW9OdssS6BbXxsuWVR5Y3qg_aPaFG0YwOI38xcVQ0/edit?usp=sharing" rel="noreferrer" target="_blank">Please fill out a form to request time off here.</a>
          </Form.Text>
        </Form.Group>
      </Jumbotron>
    </div>
  );
};

export default Time;
