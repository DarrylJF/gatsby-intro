const path = require('path')

module.exports = {
  siteMetadata: {
    title: "Test Title"
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media/`,
      },
    },
  ],
}
