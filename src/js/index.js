import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../css/common.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
