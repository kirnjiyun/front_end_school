import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App2 from "./App2";
import App3 from "./App3";
import quiz from "./Quiz"

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
// root.render(<App2 />);
root.render(<Quiz />);