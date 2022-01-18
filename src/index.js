import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*<Routes element={<App />}>*/}
      <App />
      {/*</Routes>*/}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
