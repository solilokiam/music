import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import Band from "./band";

const TopTitle = styled.div`
  width: 100%;
  ${breakpoint("desktop")`
  width: 30%;
  `}

  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.headerColor};
    margin: 10px 0;
  }
`;

const TopList = styled.div`
  margin: 30px auto;
  padding: 0 20px;
  width: 100%;
  display: grid;
  /*Define our columns */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint("desktop")`
    flex-direction: row;
  `}
`;

const Top3 = ({ title, desc, artists }) => {
  return (
    <TopContainer>
      <TopTitle>
        <h2>{title}</h2>
        <p>{desc}</p>
      </TopTitle>
      <TopList>
        {artists.map(artist => (
          <Band
            artistId={artist.artist.id}
            albumId={artist.album.id}
            image={artist.artist.images[0].url}
            why={artist.why}
          />
        ))}
      </TopList>
    </TopContainer>
  );
};

export default Top3;
