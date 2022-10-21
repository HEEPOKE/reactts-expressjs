import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes/Approuter";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./index.css";
import "./assets/css/Navbar.css";
import "./assets/css/Icon.css";
import "./assets/css/Error.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
