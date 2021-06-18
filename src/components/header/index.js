import React from "react";
import styled from "@emotion/styled";

import { Media } from "../../Media";
import Logo from "./logo";
import NavBar from "./navbar";
import MobileNavBar from "./mobile-navbar";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeftSection = styled.div`
  display: flex;
`;

const HeaderRightSection = styled.nav`
  display: flex;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderLeftSection>
      <Logo />
    </HeaderLeftSection>
    <HeaderRightSection>
      <Media greaterThanOrEqual="md">
        <NavBar />
      </Media>
      <Media lessThan="md">
        <MobileNavBar />
      </Media>
    </HeaderRightSection>
  </HeaderContainer>
);

export default Header;
