import React from "react";
import "./style.css";

const index = () => {
  return (
    <nav class="mynav navbar navbar-expand-lg navbar-dark">
      <img class="logo" src="/assets/bubbles.svg" width="3%"></img>
      <a class="navbar-brand" id="appName" href="#">
        Bubbles
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <button type="button" class="btn btn-dark btn-circle btn-sm">
                News
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button type="button" class="btn btn-dark btn-circle btn-sm">
                Time
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button type="button" class="btn btn-dark btn-circle btn-sm">
                Pay
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button type="button" class="btn btn-dark btn-circle btn-sm">
                Directory
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button type="button" class="btn btn-dark btn-circle btn-sm">
                Logout
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
