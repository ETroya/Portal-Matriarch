import React,{useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./pages/user";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Signup from "./pages/signup";
import privateroute from "./components/privateroute";
import { StateProvider, authContext } from "./utils/GlobalState";
function App() {

  const [authState, setAuthState] = useState({
    isAuthenticated: null,
    loading: true,
    user: null,
  });
  return (
    <StateProvider>
      <authContext.Provider value = {{authData: authState, setAuth: setAuthState}}>
      <Router>
        <div>
          <Navbar />
          <div className="container-fluid">
            <Route exact path={["/user", "/"]}>
              <h1>hello user</h1>
              <User />
            </Route>
            <privateroute exact path={"/admin"}>
              <Admin />
            </privateroute>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
          <Footer />
        </div>
      </Router>
      </authContext.Provider>
    </StateProvider>
  );
}

export default App;
