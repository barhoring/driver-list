import React from "react";
import { render } from "react-dom";

import "./style.css";

import Header from "./Header";

const App = () => (
  <div>
    <Header />
  </div>
);

render(<App />, document.getElementById("root"));
