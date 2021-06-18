import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => (
  <LogoContainer>
    <StaticImage alt="Logo" src="https://dummyimage.com/120x48/a98ad2/fff" />
  </LogoContainer>
);

export default Logo;
