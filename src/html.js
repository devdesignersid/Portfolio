/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import PropTypes from "prop-types";
import { mediaStyles } from "./Media";

const HTML = (props) => {
  const {
    headComponents,
    preBodyComponents,
    postBodyComponents,
    body,
    htmlAttributes,
    bodyAttributes,
  } = props;

  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <title>Some random title</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style>{mediaStyles}</style>

        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  htmlAttributes: PropTypes.shape({}).isRequired,
  headComponents: PropTypes.instanceOf(Array).isRequired,
  bodyAttributes: PropTypes.shape({}).isRequired,
  preBodyComponents: PropTypes.instanceOf(Array).isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.instanceOf(Array).isRequired,
};

export default HTML;
