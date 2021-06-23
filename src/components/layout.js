import React, { useState, useEffect } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { themeLight, themeDark } from "../themes";
import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [componentMounted, setComponentMounted] = useState(false);

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
        <Header setMode={setMode} isDark={isDark} setIsDark={setIsDark} />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
