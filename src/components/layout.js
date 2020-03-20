import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset-advanced";
import theme from "./themes/darkTheme";
import Header from "./header";

const Main = styled.main`
  padding: 0 12px;
  margin: 0 auto;
  max-width: 1800px;
  margin-top: 70px;
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${theme.bodyBackground};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    color: ${theme.bodyColor};
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
  </ThemeProvider>
);

export default Layout;
