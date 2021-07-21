import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./Register";
import NavBar from "./NavBar";
import PersonList from "./PersonList";
import "./app.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" exact />
              <Route path="/PersonList" component={PersonList} />
              <Route path="/Register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
