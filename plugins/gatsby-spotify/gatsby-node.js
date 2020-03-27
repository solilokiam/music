const Spotify = require("./spotify");

let spotify = null;

exports.onPreInit = (_, pluginOptions) => {
  spotify = new Spotify(pluginOptions.id, pluginOptions.secret);
};

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "TopsYaml") {
    const spotifyInfo = [];

    for (let i = 0; i < node.artists.length; i++) {
      const artist = await spotify.getArtist(node.artists[i].artistId);
      spotifyInfo.push({
        artist,
        why: node.artists[i].why,
        albumId: node.artists[i].albumId,
        songId: node.artists[i].songId,
      });
    }

    createNodeField({
      node,
      name: `artists`,
      value: spotifyInfo,
    });
  }
};
