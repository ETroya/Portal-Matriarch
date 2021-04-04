import React from "react";
import "./style.css";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand jumbotron" href="#">
          Portal-Matriach
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Schedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pay
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            Random Text???? (Need to move to the left)
          </span>
        </div>
      </div>
    </nav>
  );
};

export default index;
