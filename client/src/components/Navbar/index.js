import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useStateContext, authContext } from "../../utils/GlobalState";
import { Navbar, Nav } from "react-bootstrap";

import "./style.css";
import API from "../../utils/api";

const Index = () => {
  const [state, dispatch] = useStateContext();
  const history = useHistory();
  const { authData, setAuth } = useContext(authContext);

  const loguserout = () => {
    console.log("button click");
    API.logout().then(() => {
      setAuth({ ...authData, isAuthenticated: false, user: null });
      history.push("/");
    });
    console.log(
      "[INFO] Shoud have routed the user to the login screen  Navbar line 18"
    );
  };

  return (
    <nav className="mynav navbar navbar-expand-lg navbar-dark">
      <div>
        <img className="logo" src="/assets/bubbles.svg"></img>
        {/* {window.location.pathname !== "/login" &&
        window.location.pathname !== "/" ? (
          <a className="nav-link" href="/" onClick={() => alert("You Logged Out")}>
            <span
              id="logoutText"
              onClick={() => {
                loguserout();
              }}
            >
              Logout
            </span>
          </a>
        ) : null} */}
      </div>
      <a className="navbar-brand" id="appName" href="#">
        Bubbles
      </a>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/" ? (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button
                  type="button"
                  className="btn btn-dark btn-circle btn-sm"
                  onClick={() => dispatch({ type: "open-news" })}
                >
                  News
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button
                  type="button"
                  className="btn btn-dark btn-circle btn-sm"
                  onClick={() => dispatch({ type: "open-time" })}
                >
                  Time
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button
                  type="button"
                  className="btn btn-dark btn-circle btn-sm "
                  onClick={() => dispatch({ type: "open-pay" })}
                >
                  Pay
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button
                  type="button"
                  className="btn btn-dark btn-circle btn-sm"
                  onClick={
                    !state.openDirectory
                      ? () => dispatch({ type: "open-directory" })
                      : null
                  }
                >
                  Users
                </button>
              </a>
            </li>
          </ul>
          <p className="logout">
          <a className="nav-link" href="/" onClick={() => alert("You Logged Out")}>
            <span
              id="logoutText"
              onClick={() => {
                loguserout();
              }}
            >
              Logout
            </span>
          </a>
          </p>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Index;
