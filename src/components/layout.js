import React from "react";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
