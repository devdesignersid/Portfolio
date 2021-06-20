import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import MenuToggle from "./menu-toggle";

const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  position: fixed;
  top: 48px;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  height: ${(props) => (props.isOpen ? `${props.navMenuHeight}px` : "0")};
  overflow: hidden;
  -webkit-transition: height 0.3s ease;
  -moz-transition: height 0.3s ease;
  -o-transition: height 0.3s ease;
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
`;

const NavItem = styled.li`
  color: #222;
  font-size: 1em;
  display: flex;
  box-sizing: border-box;

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
  border-bottom: 2px solid #f1f1f1;
  margin-bottom: 15px;
  width: 100%;
`;

const MobileNabBar = () => {
  const [isOpen, setOpen] = useState(false);
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
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <Nav navMenuHeight={navMenuHeight} isOpen={isOpen}>
        <NavMenu ref={navMenu}>
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

export default MobileNabBar;
