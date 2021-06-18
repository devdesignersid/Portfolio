import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import MenuToggle from "./menu-toggle";

const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 48px;
  left: 0;
`;

const NavItem = styled.li`
  padding: 0.4em 1.1em;
  color: #222;
  font-size: 16px;
  display: flex;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const MobileNabBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      {isOpen && (
        <NavMenu>
          <NavItem>
            <NavLink to="/blog/">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog/">Contact</NavLink>
          </NavItem>
        </NavMenu>
      )}
    </NavContainer>
  );
};

export default MobileNabBar;
