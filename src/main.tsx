import React from "react";

import {createRoot} from "react-dom/client";
import "./index.css";
import "./puck.css";
import App from "./App";
import Preview from "./components/Preview/Preview";
import {BrowserRouter, Routes, Route} from "react-router-dom";

createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/preview" element={<Preview />} />
   </Routes>
  </BrowserRouter>
 </React.StrictMode>
);
