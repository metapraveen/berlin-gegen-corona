import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Switch, Route } from "wouter";
import About from "./About";
import ShowClinic from "./ShowClinic";

ReactDOM.render(
  <Switch>
    <Route path="/doctor/:id*">
      {(params) => <ShowClinic id={params.id} />}
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route>
      <App />
    </Route>
  </Switch>,
  document.getElementById("root")
);
