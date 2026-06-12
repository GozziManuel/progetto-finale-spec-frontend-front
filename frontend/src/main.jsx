import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

// css
import "./assets/css/index.css";

// js
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
