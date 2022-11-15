import React from "react";
import { GlobalStyle } from "../../../assets/style/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/style/theme";

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Login;
