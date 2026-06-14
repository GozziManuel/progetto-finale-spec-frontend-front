import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// js
import App from "./App.jsx";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// js bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// css
import "./assets/css/main.css";

// bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
//

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
