import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  NavbarText,
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap'
import Logo from '../images/bcbw_logo.png'
import Icon from '../images/gatsby-icon.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

import '../styles/Nav/nav.css'

library.add(fab, faBars, faTimes)

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="site-header">
      <div className="nav-menu-toggle">
        <span>
          {!isOpen ? (
            <FontAwesomeIcon onClick={toggle} icon={faBars} size="lg" />
          ) : (
            <FontAwesomeIcon onClick={toggle} icon={faTimes} size="lg" />
          )}
        </span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'nav-open' : ''}`}>
        <ul className="nav-items">
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              our beer
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-center" right>
              <DropdownItem>all beer</DropdownItem>
              <DropdownItem>on tap</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link>taproom</Link>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              latest
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-center">
              <DropdownItem>blog</DropdownItem>
              <DropdownItem>events</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link>about us</Link>
          <Link>contact us</Link>
        </ul>
      </nav>
      <Link className="logo-wrap">
        <span className="logo-text">BCBW</span>
      </Link>
      <div className="social-sidebar-toggle">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
        <FontAwesomeIcon icon={['fab', 'facebook']} />
        <FontAwesomeIcon icon={['fab', 'twitter']} />
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
