import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { OldApp } from "./OldApp.tsx";
import "./index.css";

const isOldSite = window.location.hostname.startsWith("old.");

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            {isOldSite ? <OldApp /> : <App />}
        </BrowserRouter>
    </StrictMode>
);
