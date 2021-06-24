import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme, ClassNames } from "@emotion/react";
import PropTypes from "prop-types";

import { Media } from "../../Media";
import Logo from "./logo";
import NavBar from "./navbar";
import MobileNavBar from "./mobile-navbar";
import WraperContainer from "./wrapper";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const HeaderContainer = styled.header`
  background-color: ${(props) =>
    props.theme ? props.theme.background : "#ffffff"};
  color: ${(props) => (props.theme ? props.theme.secondaryColor : "#0000000")};
  ${(props) => (props.theme ? props.theme.primaryColor : "#0000ff")};
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
              <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                moonColor="#fcf5e4"
                sunColor="#f5bc6a"
                checked={props.isDark}
                onChange={() => {
                  if (props.isDark) {
                    props.setMode("light");
                  } else {
                    props.setMode("dark");
                  }
                }}
                size={24}
                className={cx(
                  "darkModeToggle",
                  css`
                    margin-bottom: 4px !important;
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
  setMode: PropTypes.func.isRequired,
};

export default Header;
