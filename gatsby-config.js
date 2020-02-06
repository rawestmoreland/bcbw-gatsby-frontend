module.exports = {
  siteMetadata: {
    title: `Bayou City Beer Works`,
    description: `Welcome to Bayou City Beer Works. We're making the best beer in the best city. We love Houston`,
    author: `Richard Westmoreland`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bcbw_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: 'www.bayoucitybeerworks.com/wordpress',
        protocol: 'http',
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        // acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://www.using-wordpress-with-gatsby.iamtimsmith.com",
        //   replacementUrl: "https://localhost:8000",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/beer',
          '**/hours',
          '**/events',
          '**/pages',
          '**/menus',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
          '**/comments',
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
