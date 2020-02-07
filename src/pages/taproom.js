import React from 'react'
import ReCAPTCHA from 'react-recaptcha'

const TaproomPage = () => {
  const verifyCallback = response => {
    console.log('Captcha value: ', response)
  }

  return (
    <div>
      <ReCAPTCHA
        sitekey="6Le3ztYUAAAAAKyBsBrvVHnluEJRQpUczGEd8I1P"
        verifyCallback={verifyCallback}
      />
    </div>
  )
}

export default TaproomPage
