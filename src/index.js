import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

const card = localStorage.getItem("cart");
const parsed = JSON.parse(card);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
