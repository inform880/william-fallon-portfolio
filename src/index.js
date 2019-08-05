import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import { App } from "./App";

const Index = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
