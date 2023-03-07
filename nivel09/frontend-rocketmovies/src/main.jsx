import React from "react";      
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
<<<<<<< HEAD
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
=======

import { AuthProvider } from "./hooks/auth";
>>>>>>> 4c3090977156d2107d6edd7892fc2e59c8d24992
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
<<<<<<< HEAD
        <Routes />
=======
      <AuthProvider>
        <Routes />
      </AuthProvider>
>>>>>>> 4c3090977156d2107d6edd7892fc2e59c8d24992
    </ThemeProvider>
  </React.StrictMode>
);
