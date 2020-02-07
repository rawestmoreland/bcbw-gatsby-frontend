import React, { useState, useRef, createRef } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/contact/contact.css'
import { Form, FormGroup } from 'reactstrap'
import TextValidator from '../components/validator/TextValidator'
import { ValidatorForm } from 'react-form-validator-core'
import ReCaptcha from 'react-google-recaptcha'

const ContactPage = () => {
  const form = useRef(null)
  const recaptchaRef = createRef()

  const [state, setState] = useState({
    errors: {},
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [verified, setVerified] = useState(false)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const captchaChange = () => {
    setVerified(recaptchaRef.current.getValue())
    console.log('verified')
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('form submitted')
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
          <ValidatorForm ref={form} onSubmit={handleSubmit}>
            <div className="contact-form-group-row">
              <div className="contact-top-label row">
                <div className="container d-flex flex-row">
                  <p>name</p>
                  <span>*</span>
                </div>
              </div>
              <div className="contact-input-row row">
                <div className="contact-input-wrapper col-6 col-md-4 d-flex flex-column">
                  <TextValidator
                    onChange={handleChange}
                    name="firstName"
                    value={state.firstName}
                    validators={['required', 'matchRegexp:[a-zA-ZÀ-ÿ]$']}
                    errorMessages={['This field is required', 'Letters only']}
                  />
                  <label>first</label>
                </div>
                <div className="contact-input-wrapper col-6 col-md-4 d-flex flex-column">
                  <TextValidator
                    onChange={handleChange}
                    name="lastName"
                    value={state.lastName}
                    validators={['required', 'matchRegexp:[a-zA-ZÀ-ÿ]$']}
                    errorMessages={['This field is required', 'Letters only']}
                  />
                  <label>last</label>
                  <span>{state.errors['lastName']}</span>
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
                  <TextValidator
                    onChange={handleChange}
                    name="email"
                    value={state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                      'This field is required',
                      'Email is not valid',
                    ]}
                  />
                  <span>{state.errors['email']}</span>
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
                  <button type="submit">send message</button>
                </div>
              </div>
            </div>
          </ValidatorForm>
          <ReCaptcha
            ref={recaptchaRef}
            siteKey="6LeRhNYUAAAAAB3InRGsmZ8aRFGyzMfxF275LkPS"
            onChange={captchaChange}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
