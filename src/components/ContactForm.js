import axios from 'axios'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { ValidatorForm } from 'react-form-validator-core'
import ReCAPTCHA from 'react-recaptcha'
import { connect } from 'react-redux'
import TextValidator from '../components/validator/TextValidator'
import { formSentToggle } from '../state/app'
import '../styles/contact/contact.css'

const ContactForm = ({ formSent, dispatch }) => {
  const form = useRef(null)

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

  // Submit the form if the user is verifird by the ReCaptcha
  const handleSubmit = e => {
    // Contact From 7 WordPress API URL
    let URL =
      'http://www.bayoucitybeerworks.com/wordpress/wp-json/contact-form-7/v1/contact-forms/87/feedback'

    let data = new FormData()

    // The contact form 7 API data needs to be in multipart/form-data format. It won't accept json
    data.append('first-name', state.firstName)
    data.append('last-name', state.lastName)
    data.append('your-email', state.email)
    data.append('your-message', state.message)

    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    e.preventDefault()

    // If verified, send a POST reques to the wordpress API with the contact form 7 fields
    if (verified) {
      axios
        .post(URL, data, config)
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
        .then(dispatch(formSentToggle(true)))
    } else {
      alert("Please prove to us you're human")
    }
  }

  // If the ReCaptcha get a response, set the user to verified as a human.
  const verifyCallback = response => {
    if (response) {
      setVerified(true)
    }
  }

  return (
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
          {/* ReCaptcha with sitekey saved in env variable */}
          <ReCAPTCHA
            sitekey={process.env.GATSBY_RECAPTCHA}
            render="explicit"
            verifyCallback={verifyCallback}
          />
          <div className="contact-form-group-row">
            <div className="contact-input-row row">
              <div className="contact-form-submit col-sm-12 col-md-8 col-lg-4">
                <button type="submit">send message</button>
              </div>
            </div>
          </div>
        </ValidatorForm>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  formSent: state.app.formSent,
})

export default connect(mapStateToProps, null)(ContactForm)
