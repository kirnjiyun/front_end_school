import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App2 from "./App2";
import App3 from "./App3";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App3 />);

const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: 1234
  }