import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", {
        scope: "/",
      })
      .then((reg) =>
        console.log("service worker registrado, scope: ", reg.scope)
      )
      .catch((err) => console.error("fallo servicio de serv worker:", err));
  });
}
