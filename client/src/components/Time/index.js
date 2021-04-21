import React from "react";
import { Form, Jumbotron } from "react-bootstrap";

const Time = () => {
  return <div>
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
  </div>;
};
export default Time;
