import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./about";
ReactDOM.render(
 <React.StrictMode>
 <HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path="/about" element={<About/>}/>
 </Routes>
 </HashRouter>
 </React.StrictMode>,
 document.getElementById("root")
);