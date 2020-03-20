const axios = require("axios").default;
const qs = require("qs");

exports.getAuthToken = async (clientId, clientSecret) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      config
    );

    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

exports.getArtist = async (token, artistId) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}`,
      config
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

exports.getAlbum = async (token, albumId) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/albums/${albumId}`,
      config
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
