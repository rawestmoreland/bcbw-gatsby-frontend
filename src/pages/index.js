import React from 'react'
import Layout from '../components/layout'
import AgeGate from '../components/AgeGate'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

import '../styles/Home/home.css'

const IndexPage = ({ data }) => {
  const hours = data.wordpressWpHours.content

  return (
    <Layout>
      <SEO title="Home" />
      <AgeGate />
      <section className="hero-wrapper">
        <div className="hero-image"></div>
        <div className="hero-cover"></div>
        <div className="hero-logo-wrapper">
          <div className="hero-logo">Bayou City</div>
          <div className="hero-logo">Beer Works</div>
        </div>
      </section>
      <section className="taproom-wrapper">
        <div className="taproom-main container-fluid">
          <div className="row h-100">
            <div className="col-md-6 col-lg-7 d-flex justify-content-center align-items-center">
              <div className="taproom-logo-wrapper">
                <div className="taproom-logo d-flex justify-content-center">
                  TAPROOM
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 d-flex justify-content-center align-items-center">
              <div
                className="business-hours"
                dangerouslySetInnerHTML={{ __html: hours }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    wordpressWpHours(title: { eq: "Hours" }) {
      content
    }
  }
`
