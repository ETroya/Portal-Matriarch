import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./pages/user";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Signup from "./pages/signup";
import privateroute from "./components/privateroute";
import { StateProvider, authContext } from "./utils/GlobalState";
import { Submenu } from "./components/ShowDiv";

function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: null,
    loading: true,
    user: null,
  });



  useEffect(() => {
    try {
      axios.get("/api/users/user").then((res) => {
        setAuthState({
          isAuthenticated: true,
          loading: false,
          user: res.data,
        });
      });
    } catch (error) {
      console.error(error.response.data);
    };
  }, []);


  return (
    <StateProvider>
      <authContext.Provider
        value={{ authData: authState, setAuth: setAuthState }}
      >
        <Router>
          <div>
            <Navbar />
            <div className="container-fluid">
              {/* <Route path="/login" component={Login} /> */}
              <Route exact path={["/login", "/"]}>
                <Login />
              </Route>
              <Route exact path={"/user"}>
                <User />
              </Route>
              <Route exact path={"/admin"}>
                <Submenu />
               
                <Admin />
              </Route>
              {/* <Route path="/signup" component={Signup} /> */}
              <Route exact path={"/signup"}>
                <Signup />
              </Route>
            </div>
            <Footer />
          </div>
        </Router>
      </authContext.Provider>
    </StateProvider>
  );
}

export default App;
