import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import '../styles/Nav/nav.css'

const Header = ({ siteTitle }) => <header></header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
