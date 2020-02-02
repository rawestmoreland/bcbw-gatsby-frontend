import React from 'react'
import Layout from '../components/layout'
import AgeGate from '../components/AgeGate'
import SEO from '../components/seo'

import '../styles/Home/home.css'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AgeGate />
      <div className="hero-wrapper">
        <div className="hero-image"></div>
        <div className="hero-cover"></div>
        <div className="hero-logo-wrapper">
          <div className="hero-logo">Bayou City</div>
          <div className="hero-logo">Beer Works</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
