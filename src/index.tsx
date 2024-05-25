import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/globals.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <HelmetProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  </>,
);
