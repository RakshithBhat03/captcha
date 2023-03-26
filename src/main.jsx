import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CaptchaProvider } from "./context/captcha-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CaptchaProvider>
      <App />
    </CaptchaProvider>
  </React.StrictMode>
);
