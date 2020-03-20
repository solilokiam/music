import React from "react";

const Follow = ({ artistId }) => {
  return (
    <iframe
      src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${artistId}&size=basic&theme=dark`}
      width="150"
      height="30"
      scrolling="no"
      frameborder="0"
      allowtransparency="true"
      title="Follow artist"
    ></iframe>
  );
};

export default Follow;
