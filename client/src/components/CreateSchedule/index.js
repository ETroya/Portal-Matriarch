import { Jumbotron, Row, Container, Col, Form, Button } from "react-bootstrap";
import EmployeeDND from "../EmployeeDND";
import "./style.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const CreateSchedule = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          {/* <Col xs={12} md={2}>
            <Form.Group>
              <EmployeeDND />
            </Form.Group>
          </Col> */}

          <div className="col-16">
            <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" rows={8} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date" rows={8} />
              </Form.Group>
              <Button>
                Submit Event
              </Button>
            </Form>
          </div>

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
            events={[
              { title: "Eveyone is working", date: "2021-04-22" },
              { title: "Project Due", date: "2021-04-27" },
              { title: "working", date: "2021-04-26" },
            ]}
          />
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default CreateSchedule;
