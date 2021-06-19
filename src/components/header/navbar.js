import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const NavItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const NavBar = () => (
  <NavContainer>
    <NavMenu>
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
  </NavContainer>
);

export default NavBar;
