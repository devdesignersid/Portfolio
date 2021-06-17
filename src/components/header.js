import React from "react";
import { Media } from "../Media";

const Header = () => (
  <header>
    <Media lessThan="md">this will be responsive.</Media>
  </header>
);

export default Header;
