import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./Calculator.css";

import App from "./App";
import Calculator from "./Calculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Calculator />
  </StrictMode>
);
