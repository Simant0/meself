import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Home />
      </div>
    </Router>
  );
}

export default App;
