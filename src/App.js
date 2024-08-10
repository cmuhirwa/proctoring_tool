import React, { Component } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Here is where all the pages are connected to each other
import MainPage from "./containers/Home";
// import Dashboard from "./containers/Dashboard";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
