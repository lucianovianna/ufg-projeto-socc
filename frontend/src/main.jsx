import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NucleosList from "./components/NucleosList";
import NucleoEdit from "./components/NucleoEdit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NucleosList />} />
        <Route path="/nucleo/:id" element={<NucleoEdit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);