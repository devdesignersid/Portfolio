/* eslint-disable import/prefer-default-export */

import React from "react";
import { MediaContextProvider } from "./src/Media";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { ScreenClassProvider, setConfiguration } from "react-grid-system";

export const onPreRenderHTML = () => {
  // Here we configure grid
  setConfiguration({ maxScreenClass: "xl", defaultScreenClass: "xl" });
};

export const wrapRootElement = ({ element }) => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <ScreenClassProvider>
      <MediaContextProvider>{element}</MediaContextProvider>
    </ScreenClassProvider>
  </>
);
