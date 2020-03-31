require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Solilokiam Music`,
    description: `Mi musica favorita`,
    author: `@solilokiam`,
    titleTemplate: ``,
    defaultDescription: `Un listado de la musica que me gusta`,
    url: `https://music.solilokiam.com`,
    twitterUsername: `solilokiam`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Solilokiam Music`,
        short_name: `Music`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        src: "tops",
        path: `${__dirname}/src/content/tops/`,
      },
    },
    {
      resolve: "gatsby-spotify",
      options: {
        id: process.env.SPOTIFY_CLIENT_ID,
        secret: process.env.SPOTIFY_CLIENT_SECRET,
      },
    },
  ],
};
