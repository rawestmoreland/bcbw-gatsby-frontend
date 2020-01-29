import React from 'react'

import Layout from '../components/layout'
import AgeGate from '../components/AgeGate'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AgeGate />
    </Layout>
  )
}

export default IndexPage
