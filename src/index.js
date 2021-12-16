import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Providers from "./providers";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
