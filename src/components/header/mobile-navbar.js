import React, { useEffect, useRef, useState } from "react";
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
  top: 62px;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isOpen ? `${props.navMenuHeight}px` : "0")};
  overflow: hidden;
  transition: height 0.3s ease;
  z-index: 999;
`;

const NavMenu = styled.ul`
  margin: 0;
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  list-style: none;
  flex-direction: column;
  color: ${(props) => (props.theme ? props.theme.secondaryColor : "#0000ff")};
  background-color: ${(props) =>
    props.theme ? props.theme.primaryColor : "#ffffff"};
  transition: background-color 0.3s linear;
`;

const NavItem = styled.li`
  font-size: 1em;
  display: flex;
  box-sizing: border-box;
  color: inherit;

  &: first-of-type {
    margin-top: 15px;
  }

  &:last-child > a {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const NavLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  display: block;
  padding-bottom: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

const MobileNabBar = (props) => {
  const { theme, isOpen, setOpen } = props;
  const [navMenuHeight, setNavMenuHeight] = useState(0);
  const navMenu = useRef(null);

  const calcNavMenuHeight = () => {
    return navMenu.current.clientHeight;
  };

  useEffect(() => {
    setNavMenuHeight(calcNavMenuHeight());
  });

  return (
    <NavContainer>
      <MenuToggle
        theme={theme}
        isOpen={isOpen}
        toggle={() => setOpen(!isOpen)}
      />

      <Nav navMenuHeight={navMenuHeight} isOpen={isOpen}>
        <NavMenu ref={navMenu} theme={theme}>
          <NavItem>
            <NavLink to="/projects/">Projets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact/">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog/">Blog</NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </NavContainer>
  );
};

MobileNabBar.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MobileNabBar;
