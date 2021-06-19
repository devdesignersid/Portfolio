import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { themeLight, themeDark } from "../themes";
import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
