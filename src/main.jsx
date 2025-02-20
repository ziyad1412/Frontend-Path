import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LikesProvider } from "./context/LikesContext"; // Import Provider

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LikesProvider>
      <App />
    </LikesProvider>
  </BrowserRouter>
);
