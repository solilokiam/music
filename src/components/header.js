import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { GuitarAmp } from "@styled-icons/boxicons-solid/GuitarAmp";
import ExternalLink from "./externalLink";

const Head = styled.header`
  color: ${props => props.theme.headerColor};
  padding: 15px 0;
  position: fixed;
  width: 100%;
  top: 0;
  background: ${props => props.theme.bodyBackground};
`;

const NavBar = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 0.5rem;
  a {
    display: flex;
    align-items: center;
  }
`;

const Social = styled.div`
  color: ${props => props.theme.accentColor};
`;

const Header = ({ siteTitle }) => (
  <Head>
    <NavBar>
      <Title style={{ margin: 0 }}>
        <Link to="/">
          <GuitarAmp size={40} />
          Music
        </Link>
      </Title>
      <Social>
        <ExternalLink href="http://www.github.com/solilokiam/music">
          <Github size={40} title="Github" />
        </ExternalLink>
      </Social>
    </NavBar>
  </Head>
);

export default Header;
