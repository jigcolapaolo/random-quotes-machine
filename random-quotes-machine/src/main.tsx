import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/random-quotes-machine/">
    <App />
  </BrowserRouter>
);