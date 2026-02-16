import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Root element
 * This is the main entry point of the application
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Check public/index.html");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
