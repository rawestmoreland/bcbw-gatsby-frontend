import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/contact/contact.css'

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact page for Bayou City Beer Works"
      />
      <div className="contact-wrapper"></div>
    </Layout>
  )
}

export default ContactPage
