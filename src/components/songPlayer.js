import React from "react";

const SongPlayer = ({ id, className }) => (
  <div className={className}>
    <iframe
      src={`https://open.spotify.com/embed/track/${id}`}
      className={className}
      width="300"
      height="80"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="spotify player"
    />
  </div>
);

export default SongPlayer;
