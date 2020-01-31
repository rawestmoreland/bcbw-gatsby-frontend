import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Logo from '../images/bcbw_logo.png'
import Icon from '../images/gatsby-icon.png'
import { Link } from 'gatsby'

import '../styles/Nav/nav.css'

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="nav-wrapper">
        <div className="nav-bar">
          <div className="logo-wrapper">
            <img src={Logo} alt="Bayou City Beer Works Logo" />
          </div>
          <div className="menu-wrapper">
            <nav className="main-nav">
              <ul>
                <li>OUR BEER</li>
                <li>TAPROOM</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </div>
          <div className="social-icon-wrapper">
            <img src={Icon} alt="" />
            <img src={Icon} alt="" />
            <img src={Icon} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
