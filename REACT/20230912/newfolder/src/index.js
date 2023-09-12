import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import pet from"./pet"
import App_4 from "./App_4";
import Modal from "./modal";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Modal />);
