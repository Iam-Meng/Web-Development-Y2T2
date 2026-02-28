import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Scores from "./Scores.jsx";
import "./index.css";
import { ENGLISH_RESULTS, JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS } from "./data.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header batchName={"PNC Batch 2026"} />
    <div className="scores-container">
      <Scores courseName={"Java"} courseResults={JAVA_RESULTS} />
      <Scores courseName={"Python"} courseResults={PYTHON_RESULTS} />
      <Scores courseName={"HTML"} courseResults={HTML_RESULTS} />
      <Scores courseName={"English"} courseResults={ENGLISH_RESULTS} />
    </div>
  </React.StrictMode>
);
