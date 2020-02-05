import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import './404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="main-error-wrapper container">
      <h1 className="not-found-text">NOT FOUND</h1>
      <p className="error-description-text">
        You just hit a page that doesn&#39;t exist... the sadness :-(
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
