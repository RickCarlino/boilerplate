import * as React from "react";
import { render } from "react-dom";
import { Routes } from "./wow";

render(<Routes />, document.getElementById("wow"));
console.log("Are source maps on?");
