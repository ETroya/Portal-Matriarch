import { Jumbotron, Row, Container, Col, Form, Button } from "react-bootstrap";
import EmployeeDND from "../EmployeeDND";
import "./style.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{Draggable} from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


const CreateSchedule = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <Form.Group>
              <EmployeeDND/>
            </Form.Group>
          </Col>
      <FullCalendar className="fc-daygrid-day-events fc fc-media-screen fc-direction-ltr fc-theme-standard myCalendar"
  plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
  initialView="dayGridMonth"
  weekends={false}
  editable={true}
  droppable={true}
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
