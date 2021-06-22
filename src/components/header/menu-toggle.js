import { motion } from "framer-motion";
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Button = styled.button`
  z-index: 99;
  margin: 0;
  padding: 0;
  text-decoration: none;
  text-indent: 0;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  line-height: 0;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const Svg = styled.svg`
  & > path {
    stroke: ${(props) =>
      props.theme ? props.theme.accentColorPurple : "inherit"};
  }
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    // eslint-disable-next-line
    {...props}
  />
);

const transition = { duration: 0.3 };

const MenuToggle = ({ toggle, isOpen, theme }) => (
  <Button onClick={toggle}>
    <Svg theme={theme} width="23" height="23" viewBox="0 0 23 23">
      <Path
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 18%)" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" },
        }}
        transition={transition}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        stroke="hsl(0, 0%, 18%)"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={transition}
      />
      <Path
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 18%)" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" },
        }}
        transition={transition}
      />
    </Svg>
  </Button>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default MenuToggle;
