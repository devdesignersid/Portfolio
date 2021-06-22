import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { ClassNames } from "@emotion/react";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  padding: 7.5px 0;
`;

const Logo = () => (
  <LogoContainer>
    <ClassNames>
      {({ css, cx }) => (
        <StaticImage
          className={cx(
            "logoImage",
            css`
              height: 100%;
              width: 100%;
            `,
          )}
          alt="Logo"
          src="https://dummyimage.com/120x48/a98ad2/fff"
        />
      )}
    </ClassNames>
  </LogoContainer>
);

export default Logo;
