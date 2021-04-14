import React, { useState } from "react";
import { Jumbotron, Row, Container, Col, Form, Button } from "react-bootstrap";
import { useStateContext } from "../utils/GlobalState";
import Employeelist from "../components/Employeelist";


const Workweek = () => {
    return (
        <Jumbotron fluid>
        <Container>
            <Row>
        <Col xs={12} md={2}>
          <Form.Group class="dropzone"draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
            <Employeelist class="dropzone"/>
          </Form.Group>
        </Col>
        <Col xs={12} md={1}>
         Time
        </Col>
        <Col xs={12} md={1}>
         Sunday
         <div class="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Monday
         <div class="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Tuesday
         <div class="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Wednesday
         <div class="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Thursday
         <div class="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Friday
         <div class="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Saturday
         <div class="dropzone"></div>
        </Col>
    </Row>
  </Container>
</Jumbotron>
    )
}

export default Workweek;

