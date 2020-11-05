// React core
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/template/Home";
import Video from "./components/template/Video";
import Search from "./components/template/Search";

// Other
import information from "./information.json";
import "./styles/style.css";


export default function App() {
  return (

    <Router>

      <div className="App">

        <Switch>

          <Route path="/" exact render={() => <Home information={information} />} />

          <Route path="/video/:id" render={({ match }) => (<Video match={match} information={information} />)} />

           <Route path="/results/:query" render={({ match }) => (<Search match={match} information={information} />)}/>

        </Switch>

      </div>

    </Router>
  );
}






