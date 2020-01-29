import React from 'react'
import { useCookies } from 'react-cookie'
import '../styles/AgeGate/AgeGate.css'
import Logo from '../images/bcbw_logo.png'

const AgeGate = () => {
  const [cookies, setCookie] = useCookies(['aged'])

  // When user clicks yes - age gate disappears
  const ageClick = () => {
    // Get the date now
    const now = new Date()
    // Milliseconds
    const millis = now.getTime()
    // Set the cookie that will get rid of the age gate.
    setCookie('aged', true, {
      // Expire the cookie 1 year from now
      expires: new Date(millis + 31536000000),
    })
    console.log(cookies.aged)
  }

  return (
    <div
      className="age-gate"
      style={cookies.aged ? { display: 'none' } : { display: 'flex' }}
    >
      <div className="age-screen"></div>
      <div className="age-container">
        <div className="title-wrapper">
          <img src={Logo} alt="" />
        </div>
        <div className="prompt">
          <div className="prompt-text">Are you 21 or older?</div>
          <div className="buttons">
            <button
              onClick={ageClick}
              title="yes"
              className="prompt-button yes-button"
            >
              yes
            </button>
            <a
              title="no"
              href="http://www.disney.com"
              className="prompt-button no-button"
            >
              no
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeGate
