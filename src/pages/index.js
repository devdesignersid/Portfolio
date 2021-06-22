import { css } from "@emotion/react";
import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";

const StyledHeading = styled.h1`
  color: ${(props) => (props.theme ? props.theme.primaryColor : "red")};
`;

const StyledParagraph = styled.p`
  color: ${(props) => (props.theme ? props.theme.textColor : "000000")};
`;

const Index = () => {
  return (
    <Layout>
      <StyledHeading
        css={css`
          padding-top: 20px;
          margin: 0;
        `}
      >
        Welcome to Sid&rsquo;s portfolio!
      </StyledHeading>
      <StyledParagraph>
        This is some text regarding siddharth s kumar.
      </StyledParagraph>
    </Layout>
  );
};

export default Index;
