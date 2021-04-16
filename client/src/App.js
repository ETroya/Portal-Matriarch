import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./pages/user";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Signup from "./pages/signup";
import Workweek from "./pages/workweek";
import privateroute from "./components/privateroute";
import { StateProvider, authContext } from "./utils/GlobalState";
function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: null,
    loading: true,
    user: null,
  });

  useEffect(() => {
    try {
      axios.get("/api/users").then((res) => {
        setAuthState({ ...authState, user: res.data });
      });
    } catch (error) {
      console.error(error.response.data);
    }
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
                <h1>hello user</h1>
                <User />
              </Route>
              <Route exact path={"/admin"}>
                <Admin />
              </Route>
              {/* <Route path="/signup" component={Signup} /> */}
              <Route exact path={"/signup"}>
                <Signup />
              </Route>
              <Route exact path={"/workweek"}>
                <Workweek />
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
