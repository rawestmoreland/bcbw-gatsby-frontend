import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/contact/contact.css'

const ContactPage = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.state]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact page for Bayou City Beer Works"
      />
      <div className="contact-wrapper container-fluid">
        <div className="row">
          <div className="contact-header-wrapper container">
            <header className="contact-header-container d-flex justify-content-center">
              <h1 className="contact-header-text">contact</h1>
            </header>
          </div>
        </div>
        <div className="contact-form-wrapper container">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div className="contact-form-group-row">
              <div className="contact-top-label row">
                <div className="container d-flex flex-row">
                  <p>name</p>
                  <span>*</span>
                </div>
              </div>
              <div className="contact-input-row row">
                <div className="contact-input-wrapper col-6 col-md-4 d-flex flex-column">
                  <input type="text" name="firstName" onChange={handleChange} />
                  <label>first</label>
                </div>
                <div className="contact-input-wrapper col-6 col-md-4 d-flex flex-column">
                  <input type="text" name="lastName" onChange={handleChange} />
                  <label>last</label>
                </div>
              </div>
            </div>
            <div className="contact-form-group-row">
              <div className="contact-top-label row">
                <div className="container d-flex flex-row">
                  <p>email</p>
                  <span>*</span>
                </div>
              </div>
              <div className="contact-input-row row">
                <div className="contact-input-wrapper col-sm-12 col-md-8 d-flex flex-column">
                  <input type="email" name="email" onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="contact-form-group-row">
              <div className="contact-top-label row">
                <div className="container d-flex flex-row">
                  <p>comment or message</p>
                  <span>*</span>
                </div>
              </div>
              <div className="contact-input-row row">
                <div className="contact-input-wrapper col-12 d-flex flex-column">
                  <textarea name="message" onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="contact-form-group-row">
              <div className="contact-input-row row">
                <div className="contact-form-submit col-sm-12 col-md-8 col-lg-4">
                  <button>send message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
