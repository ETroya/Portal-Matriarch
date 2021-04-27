import React, { useState, useContext } from "react";
import { Jumbotron, Row, Container, Col, Form, Button } from "react-bootstrap";
import EmployeeDND from "../EmployeeDND";
import "./style.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import API from "../../utils/api";
import { authContext } from "../../utils/GlobalState";

const CreateSchedule = () => {
  const [eventTitle, setEventTitle] = useState();
  const [eventDate, setEventDate] = useState();
  const { authData } = useContext(authContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked!!!");
    API.updateEvent(eventTitle, eventDate).then((res) => {
      console.log(res);
    });
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    switch (event.target.name) {
      case "title":
        setEventTitle(event.target.value);
        break;
      case "date":
        setEventDate(event.target.value);
        break;
      default:
        break;
    }
  };

  // const eventArray = [
  //   { title: "Eveyone is working", date: "2021-04-22" },
  //   { title: "Project Due", date: "2021-04-26" },
  //   { title: "working", date: "2021-04-26" },
  //   { title: "New event", date: "2021-04-28" },
  // ];
  const eventArray = authData.user.events;
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          {/* <Col xs={12} md={2}>
            <Form.Group>
              <EmployeeDND />
            </Form.Group>
          </Col> */}

          <Form id="box">
            <Form.Group id="title" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                rows={8}
                name="title"
                value={eventTitle}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group id="event" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                rows={8}
                name="date"
                value={eventDate}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <div className="submitButton">
              <Button id="submit" onClick={(event) => handleSubmit(event)}>
                Submit Event
              </Button>
            </div>
          </Form>

          <FullCalendar
            className="fc-daygrid-day-events fc fc-media-screen fc-direction-ltr fc-theme-standard myCalendar"
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            weekends={false}
            editable={true}
            droppable={true}
            events={eventArray}
          />
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default CreateSchedule;
