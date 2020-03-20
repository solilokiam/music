import React from "react";

const Player = ({ id, className }) => (
  <div className={className}>
    <iframe
      src={`https://open.spotify.com/embed/album/${id}`}
      className={className}
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="spotify player"
    />
  </div>
);

export default Player;
