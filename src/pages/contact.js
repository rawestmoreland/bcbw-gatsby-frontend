import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'
import { connect } from 'react-redux'
import { formSentToggle } from '../state/app'

const ContactPage = ({ formSent, dispatch }) => {
  const [state, setState] = useState({})

  useEffect(() => {
    console.log(formSent)
    return function cleanup() {
      dispatch(formSentToggle(false))
    }
  })

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact form Bayou City Beer Works"
      />
      {!formSent ? <ContactForm /> : <div></div>}
    </Layout>
  )
}

const mapStateToProps = state => ({
  formSent: state.app.formSent,
})

export default connect(mapStateToProps, null)(ContactPage)
