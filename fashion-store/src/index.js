import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import  App2  from "./App2";
import reportWebVitals from "./reportWebVitals";
import {TheShoes}  from "./TheShoes/TheShoes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="//Search" element={<App2 />}/>
        <Route path="//students" element={<TheShoes />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
