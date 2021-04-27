import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useStateContext } from "../../utils/GlobalState";
// import { useHistory } from "react-router-dom";
import EmployeeList from "../Employeelist";
import Time from "../Time";
import Pay from "../Pay";
import Manage from "../Manage";
import Feed from "../feed";
import EmployeeForm from "../EmployeeForm";
import CreateSchedule from "../CreateSchedule";

export const ShowDiv = () => {
  const [state, dispatch] = useStateContext();
  if (state.openDirectory) {
    return <EmployeeList />;
  } else if (state.openTime) {
    return <Time />;
  } else if (state.openPay) {
    return <Pay />;
  } else if (state.openManage) {
    return <Manage />;
  } else if (state.openEmployeeForm) {
    return <EmployeeForm />;
  } else if (state.openCreateSchedule) {
    return <CreateSchedule />;
    // } else if (state.openViewRequest) {
    //   return <ViewRequest />;
  } else {
    return <Feed />;
  }
};

export const Submenu = () => {
  const [state, dispatch] = useStateContext();
  // const history = useHistory();

  return (
    <>
      <div className="adminDiv">
        <Row className="adminRow">
          <Col className="buttonCol" xs={1}>
            <Button
              className="btn btn-dark adminButton"
              onClick={() => dispatch({ type: "toggle-user" })}
              variant="primary"
            >
              <span className="buttonText2">Create User</span>
            </Button>
            {/* {state.addUser ? <EmployeeForm /> : null} */}
          </Col>
          <Col className="buttonCol" xs={1}>
            <Button
              className="btn btn-dark adminButton"
              onClick={() => dispatch({ type: "open-manage" })}
              variant="primary"
            >
              <span className="buttonText2">Manage Accounts</span>
            </Button>
          </Col>
          <Col className="buttonCol" xs={1}>
            <Button
              className="btn btn-dark adminButton"
              onClick={() => dispatch({ type: "open-createschedule" })}
              //   onClick={() => {
              //     console.log("this should redirect");
              //     history.push("/workweek");
              //   }}
              variant="primary"
            >
              <span className="buttonText2">Create Schedule</span>
            </Button>
          </Col>
          {/* <Button
        id="adminButton"
        className="btn btn-dark"
        onClick={() => dispatch({ type: "open-viewrequest" })}
        variant="primary"
      >
        View Requested Time Off
      </Button> */}
          <Col className="buttonCol" xs={1}>
            <Button
              className="btn btn-dark adminButton"
              onClick={() => dispatch({ type: "toggle-new-post" })}
              variant="primary"
            >
              <span className="buttonText2">Create Post</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
