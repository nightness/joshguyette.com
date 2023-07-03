import React from "react";
import ReactDOM from "react-dom/client";

// PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css

// Main
import App from "./App.tsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
