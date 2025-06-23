import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Partners } from "./screens/Partners";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Partners />
  </StrictMode>,
);