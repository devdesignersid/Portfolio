import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "react-grid-system";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

const PrePara = styled.p`
  font-family: "IBM Plex Mono", monospace;
  color: ${(props) => (props.theme ? props.theme.accentColorGreen : "#00ff00")};
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 400;
  margin: 0 0 30px 0;
  -moz-osx-font-smoothing: grayscale;
`;

const PrimaryHeading = styled.h1`
  font-family: "Barlow", sans-serif;
  color: ${(props) => (props.theme ? props.theme.primaryColor : "#000000")};
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
`;

const SecondaryHeading = styled.h1`
  font-family: "Barlow", sans-serif;
  color: ${(props) => (props.theme ? props.theme.primaryLighten : "#000000")};
  font-weight: 700;
  line-height: 0.9;
  font-size: clamp(40px, 8vw, 80px);
  margin: 10px 0 0 0;
  -moz-osx-font-smoothing: grayscale;
`;

const PostPara = styled.p`
  font-family: "Barlow", sans-serif;
  color: ${(props) => (props.theme ? props.theme.secondaryColor : "#000000")};
  font-weight: 400;
  font-size: 18px;
  margin: 20px 0 0 0;
  line-height: 1.3;
  -moz-osx-font-smoothing: grayscale;
  max-width: 500px;

  @media screen and (max-width: 480px) {
    & {
      font-size: 16px;
    }
  }
`;

const InParaLink = styled(Link)`
  text-decoration: none;
  border-bottom: ${(props) =>
    props.theme
      ? `.125em solid ${props.theme.accentColorPurple}`
      : ".05em solid #0000ff"};
  color: ${(props) =>
    props.theme ? props.theme.accentColorPurple : "#0000ff"};
  box-shaow: ${(props) =>
    props.theme
      ? `inset 0 -0.125em 0 ${props.theme.accentColorPurple}`
      : `inset 0 -0.125em 0 #0000ff`};

  transition: box-shadow 270ms cubic-bezier(0.77, 0, 0.175, 1),
    color 270ms cubic-bezier(0.77, 0, 0.175, 1);

  &:hover {
    box-shadow: ${(props) =>
      props.theme
        ? `inset 0 -1.125em 0 ${props.theme.accentColorPurple}`
        : `inset 0 -1.125em 0 #0000ff`};
    color: ${(props) => (props.theme ? props.theme.background : "#000000")};
  }
  &:focus {
    background: #fff;
    outline: none;
    background: #ff6407;
    color: #fff;
    box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CTABtn = styled(Link)`
  text-decoration: none;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  color: ${(props) => (props.theme ? props.theme.accentColorGreen : "#00ff00")};
  border: ${(props) =>
    props.theme
      ? `1px solid ${props.theme.accentColorGreen}`
      : "1px solid #00ff00"};
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  margin-top: 50px;
  align-self: flex-start;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:active {
    background-color: rgba(97, 127, 117, 0.1);
  }
`;

const Hero = (props) => {
  const { theme } = props;
  return (
    <Row>
      <Col sm={12}>
        <HeroContainer>
          <PrePara theme={theme}>Hi, my name is</PrePara>
          <PrimaryHeading theme={theme}>Siddharth S Kumar</PrimaryHeading>
          <SecondaryHeading theme={theme}>
            I build things for the web.
          </SecondaryHeading>
          <PostPara theme={theme}>
            I&lsquo;m a software engineer who specializes in building <br />
            (and occasionally designing) exceptional digital experiances.
            Currently, I&lsquo;m an engineer at&nbsp;
            <InParaLink theme={theme} to="https://chisquarelabs.com">
              Chisquarelabs
            </InParaLink>{" "}
            focused on building accessible, human-centerd products.
          </PostPara>
          <CTABtn theme={theme} to="#">
            Get In Touch
          </CTABtn>
        </HeroContainer>
      </Col>
    </Row>
  );
};

Hero.propTypes = {
  theme: PropTypes.shape({}).isRequired,
};

export default Hero;
