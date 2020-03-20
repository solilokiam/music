import React from "react";
import styled from "styled-components";
import Player from "./player";
import Follow from "./follow";

const BandContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;

  padding: 15px;
  border-radius: 0.3rem;
`;

const BandName = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.headerColor};
  margin-bottom: 10px;
`;

const BandImage = styled.img`
  border-radius: 0.3rem;
  margin-bottom: 15px;
  width: 100%;
`;

const BandPlayer = styled(Player)`
  margin-top: 15px;
  width: 100%;
`;

const Band = ({ artistId, albumId, image, why }) => {
  return (
    <BandContainer>
      <BandImage src={image} />
      <BandName>
        <h3>
          <a href={`https://open.spotify.com/artist/${artistId}`}>Spiritbox</a>
        </h3>
        <Follow artistId={artistId} />
      </BandName>
      <p>{why}</p>
      <BandPlayer id={albumId} />
    </BandContainer>
  );
};

export default Band;
