import React, { useState } from "react";
import { Jumbotron, Row, Container, Col, Form, Button } from "react-bootstrap";
import { useStateContext } from "../../utils/GlobalState";
import EmployeeDND from "../EmployeeDND";
import { ShowDiv, Submenu } from "../ShowDiv";
import "./style.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const CreateSchedule = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <Form.Group>
              <EmployeeDND className="dropzone fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event" />
            </Form.Group>
          </Col>
      <FullCalendar  
  plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
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

