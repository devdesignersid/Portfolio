/* eslint-disable import/prefer-default-export */

import React from "react";
import { MediaContextProvider } from "./src/Media";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const wrapRootElement = ({ element }) => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <MediaContextProvider>{element}</MediaContextProvider>
  </>
);

export default wrapRootElement;
