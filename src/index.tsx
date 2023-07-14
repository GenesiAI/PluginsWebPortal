import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./tailwind.css";

const obj = process.env;
console.log(obj);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
