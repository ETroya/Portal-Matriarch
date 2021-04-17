import React, { useState } from "react";
import { Jumbotron, Row, Container, Col, Form, Button } from "react-bootstrap";
import { useStateContext } from "../utils/GlobalState";
import EmployeeDND from "../components/EmployeeDND";

const Workweek = () => {
    return (
        <Jumbotron fluid>
        <Container>
            <Row>
        <Col xs={12} md={2}>
          <Form.Group>
            <EmployeeDND/>
          </Form.Group>
        </Col>
        <Col xs={12} md={1}>
         Time
         <div className="row">6:00 am</div>
        </Col>
        <Col xs={12} md={1}>
         Sunday
         <div className="sixAM row" value = "sunday6">6:00AM<div className="dropzone"></div></div>
         <div className="eightAM row"><div className="dropzone"></div></div>
         <div className="tenAM row"><div className="dropzone"></div></div>
         
        </Col>
        <Col xs={12} md={1}>
         Monday
         <div className="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Tuesday
         <div className="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Wednesday
         <div className="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Thursday
         <div className="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Friday
         <div className="dropzone"></div>
        </Col>
        <Col xs={12} md={1}>
         Saturday
         <div className="dropzone"></div>
        </Col>
    </Row>
  </Container>
</Jumbotron>
    )
}

export default Workweek;

