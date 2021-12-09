import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
=======
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> develop
  </React.StrictMode>,
  document.getElementById("root")
);
