import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "../css/tailwind.css";
import "../css/common.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
