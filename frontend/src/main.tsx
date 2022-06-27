import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@/app";
import { theme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
