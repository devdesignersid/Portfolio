import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme, ClassNames } from "@emotion/react";
import PropTypes from "prop-types";

import { Media } from "../../Media";
import Logo from "./logo";
import NavBar from "./navbar";
import MobileNavBar from "./mobile-navbar";
import WraperContainer from "./wrapper";
import DarkModeToggle from "react-dark-mode-toggle";

const HeaderContainer = styled.header`
  background-color: ${(props) =>
    props.theme ? props.theme.primaryColor : "#ffffff"};
  color: ${(props) => (props.theme ? props.theme.secondaryColor : "#0000000")};
  ${(props) => (props.theme ? props.theme.primaryColor : "#0000ff")};
  border-bottom: ${(props) =>
    props.theme ? `5px solid ${props.theme.accentColorPurple}` : "none"};
  transition: background-color 0.3s linear;

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const HeaderLeftSection = styled.div`
  display: flex;
  background-color: inherit;
  color: inherit;
`;

const HeaderRightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: inherit;
`;

const Header = (props) => {
  const theme = useTheme();
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderContainer isOpen={isOpen} theme={theme}>
      <WraperContainer>
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
                  "darkModeToggle",
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
            <NavBar theme={theme} />
          </Media>
          <Media lessThan="md">
            <MobileNavBar isOpen={isOpen} setOpen={setOpen} theme={theme} />
          </Media>
        </HeaderRightSection>
      </WraperContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
};

export default Header;
