import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import "./index.css";
import "./puck.css";
import App from "./App";
import Preview from "./components/Preview/Preview";
import DynamicPage from "./components/DynamicPage";
import Navigation from "./components/Navigation/Navigation";
import PreviewSlug from "./components/PreviewSlug/PreviewSlug";

// 👇 یک لایه Wrapper بساز که بتونه شرطی Navigation رو نمایش بده
function AppWithConditionalNavigation() {
 const location = useLocation();
 const showNavigation = location.pathname === "/" || location.pathname.startsWith("/build/");

 return (
  <>
   {showNavigation && <Navigation />}
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/build/:slug" element={<DynamicPage />} />
    <Route path="/preview" element={<Preview />} />
    <Route path="/:slug" element={<PreviewSlug />} />
   </Routes>
  </>
 );
}

createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <BrowserRouter>
   <AppWithConditionalNavigation />
  </BrowserRouter>
 </React.StrictMode>
);
