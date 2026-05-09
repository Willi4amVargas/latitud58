/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "@/App";
import { BrowserRouter, Route, Routes } from "react-router";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { TermsAndConditions } from "@/components/TermsAndConditions";
import { HelmetProvider } from "react-helmet-async";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="privacy_policy" element={<PrivacyPolicy />} />
            <Route path="terms_and_conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
