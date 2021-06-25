import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import MenuToggle from "./menu-toggle";

const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 50px 10px;
  right: 0;
  width: min(75vw, 400px);
  height: 100vh;
  overflow: hidden;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) =>
    props.theme ? props.theme.backgroundLighten : "#ffffff"};
  box-shadow: ${(props) =>
    props.theme
      ? `-10px 0px 30px -15px ${props.theme.backgroundDarken}`
      : "-10px 0px 30px -15px #000"};
  transform: ${(props) =>
    props.isNavMenuOpen ? "translateX(0vw)" : "translateX(100vw)"};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const NavMenu = styled.ol`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: outside none none;
  margin: 0;
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${(props) =>
    props.theme ? props.theme.accentColorPurple : "#0000ff"};
`;

const NavItem = styled.li`
  position: relative;
  margin: 0px auto 20px;
  counter-increment: item 1;
  font-size: clamp(14px, 4vw, 18px);
  box-sizing: border-box;
  color: inherit;
  font-family: "IBM Plex Mono", monospace;
  width: 100%;

  &::before {
    content: "0" counter(item) ".";
    display: block;
    margin-bottom: 5px;
    color: ${(props) =>
      props.theme ? props.theme.accentColorGreen : "#00ff00"};
    font-size: 14px;
  }

  &: first-of-type {
    margin-top: 15px;
  }

  &:last-child > a {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  position: relative;
  width: 100%;
  padding: 3px 20px 20px;
  font-size: inherit;
  padding-bottom: 15px;
  margin-bottom: 15px;
  width: 100%;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: ${(props) =>
      props.theme ? props.theme.accentColorGreen : "#00ff00"};
  }
`;

const MobileNabBar = (props) => {
  const { theme, isNavMenuOpen, setIsNavMenuOpen } = props;
  const navMenu = useRef(null);

  return (
    <NavContainer>
      <MenuToggle
        theme={theme}
        isNavMenuOpen={isNavMenuOpen}
        toggle={() => setIsNavMenuOpen(!isNavMenuOpen)}
      />

      <Nav isNavMenuOpen={isNavMenuOpen}>
        <NavMenu ref={navMenu} theme={theme}>
          <NavItem>
            <NavLink theme={theme} to="/about/">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink theme={theme} to="/experiance/">
              Experiance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink theme={theme} to="/work/">
              Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink theme={theme} to="/contact/">
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </NavContainer>
  );
};

MobileNabBar.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  isNavMenuOpen: PropTypes.bool.isRequired,
  setIsNavMenuOpen: PropTypes.func.isRequired,
};

export default MobileNabBar;
