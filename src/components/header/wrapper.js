import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { Media } from "../../Media";
import { Container } from "react-grid-system";

const WraperContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
`;

const Wraper = ({ children }) => (
  <>
    <Media lessThan="md">
      <WraperContainer>{children}</WraperContainer>
    </Media>
    <Media greaterThanOrEqual="md">
      <Container>
        <WraperContainer>{children}</WraperContainer>
      </Container>
    </Media>
  </>
);

Wraper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wraper;
