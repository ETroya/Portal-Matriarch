import React, {useContext} from "react";
import {useHistory} from "react-router-dom"
import { useStateContext, authContext} from "../../utils/GlobalState";
import { Navbar, Nav } from "react-bootstrap";

import "./style.css";
import API from "../../utils/api";


const Index = () => {
  const [state, dispatch] = useStateContext();
   const history = useHistory();
   const {authData, setAuth}= useContext(authContext);
   
   const loguserout =()=>{
    console.log("button click");
    API.logout().then(()=>{
      setAuth({...authData, 
      isAuthenticated: false, 
      user: null});
      history.push("/login");
    });
    console.log("[INFO] Shoud have routed the user to the login screen \ Navbar line 18");
    
   }



  return (
    <nav class="mynav navbar navbar-expand-lg navbar-dark">
      <img class="logo" src="/assets/bubbles.svg"></img>
      <a class="navbar-brand" id="appName" href="#">
        Bubbles
      </a>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/" ? (
        <>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <button
                  type="button"
                  class="btn btn-dark btn-circle btn-sm"
                  onClick={() => dispatch({ type: "open-news" })}
                >
                  News
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button
                  type="button"
                  class="btn btn-dark btn-circle btn-sm"
                  onClick={() => dispatch({ type: "open-time" })}
                >
                  Time
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button
                  type="button"
                  class="btn btn-dark btn-circle btn-sm "
                  onClick={() => dispatch({ type: "open-pay" })}
                >
                  Pay
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button
                  type="button"
                  class="btn btn-dark btn-circle btn-sm"
                  onClick={
                    !state.openDirectory
                      ? () => dispatch({ type: "open-directory" })
                      : null
                  }
                >
                  Directory
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button type="button" action="/logout" class="button is-link" class="btn btn-dark btn-circle btn-sm" onClick={()=>{
                 loguserout();
                }}>
                  Logout
                </button>
              </a>
            </li>
          </ul>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Index;
