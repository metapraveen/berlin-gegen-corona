import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Switch, Route } from "wouter";
import About from "./About";

ReactDOM.render(
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route>
      <App />
    </Route>
  </Switch>,
  document.getElementById("root")
);
