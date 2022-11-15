import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "../../organisms/navbar/Navbar";
import { theme } from "../../../assets/style/theme";
import { GlobalStyle } from "../../../assets/style/globalStyles";
import { Link } from "react-router-dom";

export const TemplateWrapper = styled.section`
  height: 100vh;
  padding: 20px;
`;

export const TemplateInnerWrapper = styled.div`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100%;
`;

export const LoginNav = styled.nav`
  position: absolute;
  top: 0;
  padding: 70px 80px;
  width: 100%;
  text-align: end;
  a {
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;

function MainTemplate() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TemplateWrapper>
        <TemplateInnerWrapper>
          <LoginNav>
            <Link to="login">zaloguj</Link>
          </LoginNav>
        </TemplateInnerWrapper>
        <Navbar />
      </TemplateWrapper>
    </ThemeProvider>
  );
}

export default MainTemplate;
