import * as React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Front } from "./main/index";

export let Routes = () => (
  <Router>
    <div>
      <h2>Hello, world!</h2>
      <Route path="/:id" render={Front} />
    </div>
  </Router>
);
