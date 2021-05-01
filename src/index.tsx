import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router, Route } from "wouter";
import More from "./More";

ReactDOM.render(
  <Router>
    <Route>
      <App />
    </Route>
    <Route path="/more">
      <More />
    </Route>
  </Router>,
  document.getElementById("root")
);
