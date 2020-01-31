import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const SingleBeerTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressAcfBeer.acf.beer_name}
        description={data.wordpressAcfBeer.acf.style}
      ></SEO>
    </Layout>
  )
}

export default SingleBeerTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressAcfBeer(wordpress_id: { eq: $id }) {
      acf {
        beer_name
        style
        abv
        ibu
        description
        available_in_cans
        available_on_draft
      }
    }
  }
`
