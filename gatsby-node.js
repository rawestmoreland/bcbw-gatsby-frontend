/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Create a page for every post with the gatsbyPage API
const path = require('path')
const { createFilepath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const PageTemplate = path.resolve('./src/templates/Page.js')
  const BlogPostTemplate = path.resolve('./src/templates/BlogPost.js')
  const SingleBeerTemplate = path.resolve('./src/templates/SingleBeer.js')
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpBeer {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create a page for each blog post
  const BlogPosts = result.data.allWordpressPost.edges
  BlogPosts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    })
  })

  // Create a page for each beer
  const OurBeers = result.data.allWordpressAcfBeer.edges
  OurBeers.forEach(beer => {
    createPage({
      path: `/beer/${beer.node.slug}`,
      component: SingleBeerTemplate,
      context: {
        id: beer.node.wordpress_id,
      },
    })
  })
}
