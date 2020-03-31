const axios = require("axios").default;
const qs = require("qs");

function Spotify(clientId, clientSecret) {
  this._clientId = clientId;
  this._clientSecret = clientSecret;
  this._token = null;
}

Spotify.prototype = {
  getAuthToken: async function() {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: this._clientId,
        password: this._clientSecret,
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

      this._token = response.data.access_token;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  getArtist: async function(artistId) {
    if (this._token === null) {
      await this.getAuthToken();
    }

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this._token}`,
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
  },
};

module.exports = Spotify;
