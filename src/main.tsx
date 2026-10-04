import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// The old blog used to live at old.aryansach.dev. It now lives at /old,
// so send subdomain visitors (and their deep links) there.
if (window.location.hostname.startsWith("old.")) {
    const path = window.location.pathname === "/" ? "" : window.location.pathname;
    window.location.replace(`https://www.aryansach.dev/old${path}`);
} else {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
}
