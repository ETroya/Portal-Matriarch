import React, { useState } from "react";
import { Jumbotron, Row, Container, Col, Form, Button } from "react-bootstrap";
import { useStateContext } from "../../utils/GlobalState";
import EmployeeDND from "../EmployeeDND";
import { ShowDiv, Submenu } from "../ShowDiv";
import "./style.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

const CreateSchedule = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <Form.Group>
              <EmployeeDND className="dropzone" />
            </Form.Group>
          </Col>
          {/* <Col xs={12} md={1}>
            Time
            <div className="row">6:00 am</div>
          </Col>
          <Col xs={12} md={1}>
            Sunday
            <div className="sixAM row" value="sunday6">
            <div className="dropzone"></div>
            </div>
            <div className="eightAM row">
              <div className="dropzone"></div>
            </div>
            <div className="tenAM row">
              <div className="dropzone"></div>
            </div>
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
          </Col> */}

      <FullCalendar  
  plugins={[ dayGridPlugin, interactionPlugin ]}
  initialView="dayGridMonth"
  weekends={false}
  droppable={true}
  editable={true}
  events={[
    { title: "Eveyone is working", date: '2021-04-22' },
    { title: 'Project Due', date: '2021-04-27' },
    { title: "working", date: "2021-04-26"}
  ]}
/>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default CreateSchedule;
