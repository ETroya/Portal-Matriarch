import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Wrapper>

       </Wrapper>
       <Footer />
     </div>
   </Router>
  );
}

export default App;
