import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoggedInProvider } from "./contexts/LoggedIn";
import { CurrentUserProvider } from "./contexts/CurrentUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoggedInProvider>
    <CurrentUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserProvider>
  </LoggedInProvider>
);
