import React from "react";
import styled from "@emotion/styled";
import { useTheme, ClassNames } from "@emotion/react";
import PropTypes from "prop-types";

import { Media } from "../../Media";
import Logo from "./logo";
import NavBar from "./navbar";
import MobileNavBar from "./mobile-navbar";
import DarkModeToggle from "react-dark-mode-toggle";

const HeaderContainer = styled.header`
  background-color: ${(props) =>
    props.theme ? props.theme.background : "yellow"};
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const HeaderLeftSection = styled.div`
  display: flex;
`;

const HeaderRightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = (props) => {
  const theme = useTheme();

  return (
    <HeaderContainer theme={theme}>
      <HeaderLeftSection>
        <Logo />
      </HeaderLeftSection>
      <HeaderRightSection>
        <ClassNames>
          {({ css, cx }) => (
            <DarkModeToggle
              size="52px"
              checked={props.isDark}
              onChange={props.setIsDark}
              className={cx(
                "some-class",
                css`
                  & > div {
                    width: 83.8px !important;
                    height: 88.8px !important;
                  }
                  margin-right: 15px;
                `,
              )}
            />
          )}
        </ClassNames>
        <Media greaterThanOrEqual="md">
          <NavBar />
        </Media>
        <Media lessThan="md">
          <MobileNavBar />
        </Media>
      </HeaderRightSection>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
};

export default Header;
