import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/globals.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>,
);
