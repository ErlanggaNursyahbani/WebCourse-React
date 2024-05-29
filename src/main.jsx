import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";
import ScrollToTop from "./components/ScrollToTop";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
