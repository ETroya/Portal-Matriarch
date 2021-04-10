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
          <Form.Group>
            <Form.Control type="text" placeholder="Find Employee" />
            <Employeelist />
          </Form.Group>
        </Col>
        <Col xs={12} md={1}>
         Time
        </Col>
        <Col xs={12} md={1}>
         Sunday
        </Col>
        <Col xs={12} md={1}>
         Monday
        </Col>
        <Col xs={12} md={1}>
         Tuesday
        </Col>
        <Col xs={12} md={1}>
         Wednesday
        </Col>
        <Col xs={12} md={1}>
         Thursday
        </Col>
        <Col xs={12} md={1}>
         Friday
        </Col>
        <Col xs={12} md={1}>
         Saturday
        </Col>
    </Row>
    </Container>
</Jumbotron>
    )
}

export default Workweek;

