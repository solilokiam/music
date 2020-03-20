const spotify = require("./spotify");

let clientId = null;
let clientSecret = null;
let token = null;

exports.onPreInit = (_, pluginOptions) => {
  clientId = pluginOptions.id;
  clientSecret = pluginOptions.secret;
};

const getArtistInfo = async artistId => {
  if (token === null) {
    token = await spotify.getAuthToken(clientId, clientSecret);
  }

  return spotify.getArtist(token, artistId);
};

const getAlbumInfo = async albumId => {
  if (token === null) {
    token = await spotify.getAuthToken(clientId, clientSecret);
  }

  return spotify.getAlbum(token, albumId);
};

const generateArtistInfo = async artistList => {
  const artists = [];
  const albums = [];
  for (let i = 0; i < artistList.length; i++) {
    artists.push(await getArtistInfo(artistList[i].artistId));
    albums.push(await getAlbumInfo(artistList[i].albumId));
  }
  return { artists, albums };
};

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "TopsYaml") {
    const spotifyInfo = [];

    for (let i = 0; i < node.artists.length; i++) {
      const artist = await getArtistInfo(node.artists[i].artistId);
      const album = await getAlbumInfo(node.artists[i].albumId);
      spotifyInfo.push({ artist, album, why: node.artists[i].why });
    }

    createNodeField({
      node,
      name: `artists`,
      value: spotifyInfo,
    });
  }
};
