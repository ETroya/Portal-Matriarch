import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import User from "./pages/user";
import Admin from "./pages/admin";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path={"/user"}>
          <User /></Route>
        <Route exact path={"/admin"}>
<Admin />
        </Route>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
