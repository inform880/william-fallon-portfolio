import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import { App } from "./App";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const Index = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
