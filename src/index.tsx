import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import OnPremisesConnectivity from "./OnPremisesConnectivity";
import NoHybrid from "./NoHybrid";
ReactDOM.render(
 <React.StrictMode>
 <HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path="/OnPremisesConnectivity" element={<OnPremisesConnectivity/>}/>
 <Route path="/NoHybrid" element={<NoHybrid/>}/>
 </Routes>
 </HashRouter>
 </React.StrictMode>,
 document.getElementById("root")
);