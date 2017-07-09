import * as React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Front } from "./main/index";

export let Routes = () => (
  <Router>
    <div>
      {/* Base route*/}
      <Route path="/" render={Front} />
      {/* nested route level two*/}
      <h2>Hello, world!</h2>
    </div>
  </Router>
);
