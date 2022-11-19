import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./index.css";
import "./assets/css/main.css";
import "./assets/css/Navbar.css";
import "./assets/css/Icon.css";
import "./assets/css/Error.css";
import "./assets/css/Loading.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
