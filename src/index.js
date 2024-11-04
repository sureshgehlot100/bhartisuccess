import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },

  palette: {
    major: 'white',
    minor:'#fff',
    patch: 'black',
    buttoncolor: '#7065f0',
    textColor: 'rgb(80, 120, 255)'
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
