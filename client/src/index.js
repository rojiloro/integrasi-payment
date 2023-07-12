import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import from app
import App from "./App";

import { UserContextProvider } from "./Context/UserContext";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </React.StrictMode>
);
