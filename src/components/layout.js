import React, { useState, useEffect } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { themeLight, themeDark } from "../themes";
import PropTypes from "prop-types";
import { css, ThemeProvider, Global, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          background-color: ${theme.background};
          -webkit-font-smoothing: subpixel-antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-smoooth: always;
        }
      `}
    />
  );
};

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [componentMounted, setComponentMounted] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    if (mode === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (
      window.matchMedia &&
      window.matchMedia(`(prefers-color-scheme : dark)`).matches &&
      !localTheme
    ) {
      setMode("dark");
    } else if (localTheme === "dark") {
      setIsDark(true);
    } else {
      setMode("light");
    }

    setComponentMounted(true);
  }, []);

  if (!componentMounted) {
    return <div />;
  }
  return (
    <>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <GlobalStyles />
        <Header
          isNavMenuOpen={isNavMenuOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
          setMode={setMode}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <Main isNavMenuOpen={isNavMenuOpen} setIsNavMenuOpen={setIsNavMenuOpen}>
          {children}
        </Main>
        <Footer
          isNavMenuOpen={isNavMenuOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
