// React core
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

// Components
import Home from "./components/template/Home";


// Other
import information from "./information.json";
import "./styles/style.css";

function App() {
  return (
    <div className="App">

    <Router>
    <Home information = {information}/>
    </Router>
    
    
    </div>
  );
}

export default App;
