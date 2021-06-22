import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";

import { Container } from "react-grid-system";

const MainContainer = styled.main`
  background-color: ${(props) =>
    props.theme ? props.theme.background : "#ffffff"};
  transition: background-color 0.3s linear;
  color: inherit;
`;

const Main = (props) => {
  const { children } = props;
  const theme = useTheme();
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { theme });
    }
    return child;
  });

  return (
    <MainContainer theme={theme}>
      <Container>{childrenWithProps}</Container>
    </MainContainer>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
