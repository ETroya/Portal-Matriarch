import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import User from "./pages/user";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <User />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
