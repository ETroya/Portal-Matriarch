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

      <Jumbotron fluid>
        <Form.Group>
          <Form.Label for="exampleFile">Submit time-off sheet</Form.Label>
          <Form.Control type="file" name="file" id="exampleFile" />
          <Form.Text color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </Form.Text>
        </Form.Group>
      </Jumbotron>
    </div>
  );
};

export default Time;
